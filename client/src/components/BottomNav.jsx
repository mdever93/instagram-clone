import React from 'react'
import './BottomNav.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

const BottomNav = (props) => {
  return (
    <div className='bottom-nav'>
      <HomeOutlinedIcon fontSize='inherit' />
      <SearchRoundedIcon fontSize='inherit' />
      <AccountCircleTwoToneIcon className='profile' onClick={props.profile} fontSize='inherit' />
    </div>
  )
}

export default BottomNav