import React from 'react'
import './landing.scss'
import avatar from '../../images/avatar.jpg'

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="about-section">
        <div className="avatar">
          <img alt="avatar" src={avatar} />
        </div>
        <div className="description">
          <h1>Max Conrad</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>
      <div className="link-section">
        <div className="left-padding" />
        <div className="links">
          <div className="link"></div>
          <div className="link"></div>
          <div className="link"></div>
          <div className="link"></div>
        </div>
      </div>
    </div>
  )
}

export default Landing
