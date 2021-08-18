import { Close, Menu } from '@material-ui/icons'
import React, { useState } from 'react'
import Button from '../Button/Button'
import './Header.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          Kieu Dac
        </div>
        <div className="header__menuIcon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Close /> : <Menu />}
        </div>
        {
          isOpen ? <div className="header__blur"></div> : null
        }
        <div className={isOpen ? "header__nav active" : "header__nav"}>
          <a className="header__link" href="#" target="_blank">
            <span className="green-color">01<span className="dot">.</span></span>
            About
          </a>
          <a className="header__link" href="#" target="_blank">
            <span className="green-color">02<span className="dot">.</span></span>
            Experience
          </a>
          <a className="header__link" href="#" target="_blank">
            <span className="green-color">03<span className="dot">.</span></span>
            Work
          </a>
          <a className="header__link" href="#" target="_blank">
            <span className="green-color">04<span className="dot">.</span></span>
            Contact
          </a>
          <div className="header__resume">
            <Button text="Resume" sm />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
