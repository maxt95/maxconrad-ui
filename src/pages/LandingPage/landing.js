import React from 'react'
import './landing.scss'
import avatar from '../../images/avatar.jpg'

const renderLinks = () => {
  const linkData = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
    },
    {
      name: 'Github',
      url: 'https://github.com/maxt95'
    },
    {
      name: 'Resume',
      url: 'tbd'
    },
    {
      name: 'Portfolio',
      url: 'tbd'
    }
  ]

  return(
    <>
      {linkData.map((link) => {
        return (
          <div className="link" key={link.name}>
            <h2>{link.name}</h2>
          </div>
      )})}
    </>
  )
}
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
          {renderLinks()}
        </div>
      </div>
    </div>
  )
}

export default Landing
