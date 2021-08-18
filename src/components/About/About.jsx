import React from 'react'
import './About.scss'

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="title">
          <span className="green-color">01.</span>
          About Me
        </div>
        <div className="about__main">
          <div className="about__content">
            <p>Hello! My name is Brittany and I enjoy creating things that
              live on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes —
              turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of
              working at an advertising agency, a start-up, a huge corporation,
              and a student-led design studio.<span className="green-color"> My main </span>focus these days is building
              accessible, inclusive products and digital experiences at Upstatement
              for a variety of clients.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="about__list">
              <li className="about__list-item">
                HTML
              </li>
              <li className="about__list-item">
                CSS (SASS)
              </li>
              <li className="about__list-item">
                JavaScript (ES6+)
              </li>
              <li className="about__list-item">
                React
              </li>
              <li className="about__list-item">
                Git
              </li>
              <li className="about__list-item">
                English
              </li>
            </ul>
          </div>
          <div className="about__img">
            <div className="about__img-box">
              <img src="https://i.pinimg.com/originals/15/41/71/154171e296fe32cb25399092e4e4bb4f.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
