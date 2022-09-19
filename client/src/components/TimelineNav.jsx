import React from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import './TimelineNav.scss'

const TimelineNav = (props) => {
  return (
    <div className='timeline-nav flex'>
      {/* <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" alt="" /> */}
      <img className='logo' src="https://www.pngkey.com/png/full/1-13459_instagram-font-logo-white-png-instagram-white-text.png" alt="" />
      <KeyboardArrowDownRoundedIcon fontSize='inherit' />
      <div className='create-post flex' onClick={props.create}>
      <AddRoundedIcon fontSize='inherit' />
      </div>
      <FavoriteBorderRoundedIcon fontSize='inherit' />
      <ChatBubbleOutlineRoundedIcon fontSize='inherit' />
    </div>
  )
}

export default TimelineNav