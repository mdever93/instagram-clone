import React from 'react'
import { useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import GridOnIcon from '@mui/icons-material/GridOn';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';

import './Profile.scss'

const Profile = () => {
  const [posts, setPosts] = useState('')

  const showUserPosts = () => {
    setPosts('user')
  }

  const showTaggedPosts = () => {
    setPosts('tagged')
  }
  return (
    <div className='profile'>
      <div className='header flex'>
        <p className='username bold'>Username</p>
        <AddRoundedIcon className='create-post' fontSize='inherit' />
        <MenuRoundedIcon className='menu' fontSize='inherit' />
      </div>
      <div className='user-info flex'>
        <div className='container flex'>

          <img className='avatar' src="https://avatars.dicebear.com/api/pixel-art/1000.svg" alt="" />
          <div className='posts flex'>
            <span className='bold'>99</span>
            <p>Posts</p>
          </div>
          <div className='followers flex'>
            <span className='bold'>10000</span>
            <p>Followers</p>
          </div>
          <div className='following flex'>
            <span className='bold'>1000</span>
            <p>Following</p>
          </div>
        </div>
        <span className='display-name bold'>Display name</span>
        <p> User bio Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos, ducimus modi exercitationem quos unde blanditiis nostrum tenetur debitis, magni similique, quidem ullam. Voluptatibus id ipsam tenetur magni corrupti magnam?</p>
        <button className='edit bold'>Edit profile</button>
      </div>
      <div className='posts-section'>
        <div className='container'>
          <div className='posts-filter flex'>
            <div className={`user-posts flex ${posts === 'user' ? 'selected' : ''}`} onClick={() => showUserPosts()}><GridOnIcon /></div>
            <div className={`tagged-posts flex ${posts === 'tagged' ? 'selected' : ''}`} onClick={() => showTaggedPosts()}><PersonPinOutlinedIcon /></div>
          </div>
          <div className={`underline flex ${posts === 'tagged' ? 'right' : ''}`}></div>
        </div>
        <div className='posts-grid'>
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />
          <img src="https://avatars.dicebear.com/api/pixel-art/1002.svg" alt="" />

        </div>
      </div>
    </div>
  )
}

export default Profile