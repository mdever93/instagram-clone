import React from 'react'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'

import './Reply.scss'

const Reply = () => {
  return (
    <div className='reply-item flex'>
    <img className='avatar small' src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
    <div className='column'>
    <div className='row flex'>
            <p className='content'><span className='bold'>Username</span> Caption goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum vel velit nemo, distinctio possimus quisquam non delectus corrupti vitae rerum fugiat! Rem rerum ipsum minima illo culpa error doloribus.</p>
            <div className='like-button flex grey'>
              <FavoriteBorderRoundedIcon fontSize='inherit' />
            </div>
          </div>
      <span className='time-since-posted content grey'>10d</span>
      <span className='comment-likes content grey bold'>15 likes</span>
      <span className='reply content grey bold'>Reply</span>
      <span className='send content grey bold'>Send</span>
    </div>
  </div>
)
}

export default Reply