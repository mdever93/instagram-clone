import React from 'react'
import CommentsItem from './CommentsItem';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import SendIcon from '@mui/icons-material/Send';


import './CommentsSection.scss'

const CommentsSection = () => {
  return (
    <div className='comments-page flex'>
      <header className='header flex'>
        <ArrowBackIosRoundedIcon fontSize='inherit' />
        <h1>Comments</h1>
        <div className='send flex'>
          <SendIcon fontSize='inherit' />
        </div>
      </header>
      <div className='post-caption flex'>
        <img className='avatar' src="https://avatars.dicebear.com/api/pixel-art/1000.svg" alt="" />
        <p><span className='bold'>Username</span> Caption goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum vel velit nemo, distinctio possimus quisquam non delectus corrupti vitae rerum fugiat! Rem rerum ipsum minima illo culpa error doloribus.</p>
      </div>
      <div className='comments flex'>
        <CommentsItem />
        <CommentsItem />
        <CommentsItem />
      </div>
      <div className='new-comment flex'>
      <img className='avatar large' src="https://avatars.dicebear.com/api/pixel-art/1001.svg" alt="" />
      <input type="text" name="new-comment" id="new-comment" />
      </div>
    </div>
  )
}

export default CommentsSection