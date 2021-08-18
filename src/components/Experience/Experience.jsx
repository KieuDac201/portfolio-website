import React from 'react'
import VerticalTabs from '../VerticalTabs/VerticalTabs'
import './Experience.scss'


const Experience = () => {
  return (
    <section className="experience">
      <div className="experience__container">
        <div className="title">
          <span className="green-color">02.</span>
          Where I’ve Worked
        </div>
        <div className="experience__tabs">
          <VerticalTabs />
        </div>
      </div>
    </section>
  )
}

export default Experience
