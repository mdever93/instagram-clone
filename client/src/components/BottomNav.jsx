import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

import './BottomNav.scss'

const BottomNav = (props) => {
  return (
    <div className='bottom-nav'>
      {props.page !== 'timeline' && <HomeOutlinedIcon onClick={props.timeline} fontSize='inherit' />}
      {props.page === 'timeline' && <HomeIcon onClick={props.timeline} fontSize='inherit' />}
      <SearchRoundedIcon className={props.page === 'search' ? 'selected' : ''} onClick={props.search} fontSize='inherit' />
      <AccountCircleTwoToneIcon className={props.page === 'profile' ? 'selected' : ''} onClick={props.profile} fontSize='inherit' />
    </div>
  )
}

export default BottomNav