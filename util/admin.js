const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
const serviceAccount = require("../firebase-config/instagram-images-1b68c-firebase-adminsdk-m90ff-30670a73e7.json");

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: 'instagram-images-1b68c.appspot.com/'
});

const bucket = getStorage().bucket();

module.exports = (bucket)