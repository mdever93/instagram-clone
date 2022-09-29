const { v4: uuidv4 } = require('uuid');
const BusBoy = require("busboy");
const path = require("path");
const os = require("os");
const fs = require("fs");
const bucket = require('../util/admin')

exports.uploadPhoto = (req, res) => {
  const busboy = BusBoy({ headers: req.headers });

  let imageToBeUploaded = {};
  let imageFileName;
  let caption;
  // String for image token
  let generatedToken = uuidv4();

  console.log('CREATE POST REQUEST');
  busboy.on("file", (fieldname, file, info) => {
    const { filename, encoding, mimeType } = info;
    // console.log('SERVER SIDE', fieldname, file, filename, encoding, mimeType);
    console.log('FIELDNAME', fieldname);
    console.log('FILE', file);
    console.log('FILENAME', filename);
    // console.log('ENCODING', encoding);
    console.log('mimeType', mimeType);
    console.log('GENERATED TOKEN', generatedToken);
    if (mimeType !== "image/jpeg" && mimeType !== "image/png") {
      return res.status(400).json({ error: "Wrong file type submitted" });
    }
    // my.image.png => ['my', 'image', 'png']
    const imageExtension = filename.split(".")[filename.split(".").length - 1];
    // 32756238461724837.png
    imageFileName = `${uuidv4()}.${imageExtension}`;
    const filepath = path.join(os.tmpdir(), imageFileName);
    imageToBeUploaded = { filepath, mimeType };
    file.pipe(fs.createWriteStream(filepath));
  });
  // busboy.on("field", (name, val, info) => {
  //   console.log('NAME', name);
  //   console.log('VAL', val);
  //   console.log('INFO', info);
  //   caption = val;
  // })
  busboy.on("finish", () => {
    bucket.upload(imageToBeUploaded.filepath, {
      resumable: false,
      metadata: {
        metadata: {
          contentType: imageToBeUploaded.mimeType,
          //Generate token to be appended to imageUrl
          firebaseStorageDownloadTokens: generatedToken,
        },
      },
    })
      // .then(() => {
      //   // Append token to url
      //   const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media&token=${generatedToken}`;
      //   return db.doc(`/users/${req.user.handle}`).update({ imageUrl });
      // })
      .then(() => {
        return res.json({ message: "image uploaded successfully", token: generatedToken });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: "something went wrong" });
      });
  });
  req.pipe(busboy)
  // busboy.end(req.rawBody);

}