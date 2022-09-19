import React from 'react'
import { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';


import './CreatePost.scss'

const CreatePost = (props) => {
  const [uploadedImage, setUploadedImage] = useState(null)

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setUploadedImage(readerEvent.target.result);
    }
  }
  return (
    <div className='create-post flex'>
      <div className='header flex'>
        <CloseRoundedIcon className='close' onClick={props.timeline} fontSize='inherit' />
        <p className='bold'>New post</p>
        <p className='bold next'>Next</p>
      </div>
      <div className='add-photo flex'>
        {uploadedImage ? (
          <>
            <img src={uploadedImage} alt="" />
            <HighlightOffRoundedIcon onClick={() => setUploadedImage(null)} fontSize='inherit' />
          </>
        ) : (
          <label>
            <input type="file" hidden onChange={addImageToPost} />
            <AddRoundedIcon fontSize='inherit' />
          </label>
        )}
      </div>
    </div >
  )
}

export default CreatePost