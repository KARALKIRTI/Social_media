import React from 'react'
import './home.scss';
import Stories from '../../components/stories/Stories';
import Posts from '../../components/posts/Posts';
import Share from '../../components/share/Share'
export default function home() {
  return (
    <div className='home'>
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}
