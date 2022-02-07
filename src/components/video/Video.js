import React from 'react';
import './Video.css'
import Video from './../../media/video.mp4'

function video() {
  return <div>
      <video className='Video' src={Video} autoPlay loop muted />
  </div>;
}

export default video;
