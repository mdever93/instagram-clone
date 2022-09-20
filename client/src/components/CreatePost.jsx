import React from 'react'
import { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';


import './CreatePost.scss'
import axios from 'axios';

const CreatePost = (props) => {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [showCaptionInput, setShowCaptionInput] = useState(false)
  const [caption, setCaption] = useState('')

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setUploadedImage(readerEvent.target.result);
    }
  }

  const next = () => {
    if (uploadedImage) {
      setShowCaptionInput(true);
    }
  }

  const back = () => {
    setShowCaptionInput(false)
  }

  const removeImage = () => {
    setUploadedImage(null)
    if (caption) {
      setCaption('')
    }
  }

  const sendToServer = () => {
    if (uploadedImage && caption) {
      console.log('click');
      const post = {
        image: uploadedImage,
        caption: caption
      }
      axios.post('/api/posts', post)
      .then((res) => {
        console.log(res);
      })
    }
  }
  return (
    <div className='create-post flex'>
      <div className='header flex'>
        {!showCaptionInput && <CloseRoundedIcon className='close' onClick={props.timeline} fontSize='inherit' />}
        {showCaptionInput && <ArrowBackIosRoundedIcon className='back' onClick={() => back()} fontSize='inherit' />}
        <p className='bold'>New post</p>
        {!showCaptionInput && <p className='bold next' onClick={() => next()}>Next</p>}
        {showCaptionInput && <p className='bold next' onClick={() => sendToServer()}>Share</p>}
      </div>
      {showCaptionInput ? (
        <div className='caption-section flex'>
          <img src={uploadedImage} alt="" />
          <textarea
            className='caption'
            type="text"
            placeholder='Write a caption...'
            value={caption}
            onChange={(e) => {
              setCaption(e.target.value)
            }}
          />
        </div>
      ) : (


        <div className='add-photo flex'>
          {uploadedImage ? (
            <>
              <img src={uploadedImage} alt="" />
              <HighlightOffRoundedIcon onClick={() => removeImage()} fontSize='inherit' />
            </>
          ) : (
            <label>
              <input type="file" hidden onChange={addImageToPost} />
              <AddRoundedIcon fontSize='inherit' />
            </label>
          )}
        </div>
      )}
    </div >
  )
}

export default CreatePost