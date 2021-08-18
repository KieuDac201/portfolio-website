import React from 'react'
import Button from '../Button/Button'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="green-color footer__titleSm">
          04. What’s Next?
        </p>
        <h3 className="footer__title">Get In Touch</h3>
        <p className="footer__desc">
          Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <Button text="Say Hello" />
      </div>
      <p className="footer__designer">
        Designed & Built by Brittany Chiang
      </p>
    </footer>
  )
}

export default Footer
