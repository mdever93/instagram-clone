import React from 'react'
import TimelinePost from './TimelinePost'
import TimelineNav from './TimelineNav'

import './Timeline.scss'

function Timeline(props) {
  return (
    <div className='timeline'>
      <TimelineNav create={props.create} />
      <TimelinePost comments={props.comments} />
      <TimelinePost comments={props.comments} />
    </div>
  )
}

export default Timeline