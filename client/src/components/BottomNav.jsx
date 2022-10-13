import React from 'react'
import './BottomNav.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

const BottomNav = (props) => {
  return (
    <div className='bottom-nav'>
      <HomeOutlinedIcon onClick={props.timeline} fontSize='inherit' />
      <SearchRoundedIcon onClick={props.search} fontSize='inherit' />
      <AccountCircleTwoToneIcon onClick={props.profile} fontSize='inherit' />
    </div>
  )
}

export default BottomNav