import React from 'react'
import { IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendIcon from '@mui/icons-material/Send';
import TurnedInNotSharpIcon from '@mui/icons-material/TurnedInNotSharp';
// import PropTypes from 'prop-types'

import "./TimelinePost.scss";

function TimelinePost(props) {
  const caption = (<p><span>Username</span> Caption goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum vel velit nemo, distinctio possimus quisquam non delectus corrupti vitae rerum fugiat! Rem rerum ipsum minima illo culpa error doloribus.</p>
  ) 
  return (
    <div className='timeline-post'>
      <div className='header flex'>
        <div className='avatar-username flex'>
        <img className='avatar' src="https://avatars.dicebear.com/api/pixel-art/1000.svg" alt="" />
        <p className='username bold'>Username</p>
        </div>
        <MoreHorizIcon />
      </div>
      <div className='media flex'>
        <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-8.jpg?w=1500&ssl=1" alt="" />
      </div>
      <div className='buttons flex'>
        <div className='like'>
          <FavoriteBorderRoundedIcon fontSize='inherit' />
        </div>
        <div className='comment' onClick={props.comments}>
          <ModeCommentOutlinedIcon fontSize='inherit' />
        </div>
        <div className='send'>
          <SendIcon fontSize='inherit' />
        </div>
        <div className='save'>
          <TurnedInNotSharpIcon fontSize='inherit' />
        </div>
      </div>
      <span className='likes bold'>9,567 likes</span>
      <div className='caption'>
        {caption}
        {/* <p><span>Username</span> Caption goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum vel velit nemo, distinctio possimus quisquam non delectus corrupti vitae rerum fugiat! Rem rerum ipsum minima illo culpa error doloribus.</p> */}
      </div>
    </div>
  )
}

// TimelinePost.propTypes = {}

export default TimelinePost
