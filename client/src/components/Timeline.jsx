import React from 'react'
import TimelinePost from './TimelinePost'
import TimelineNav from './TimelineNav'

function Timeline() {
  return (
    <div className='timeline'>
      <TimelineNav />
      <TimelinePost />
      <TimelinePost />
    </div>
  )
}

export default Timeline