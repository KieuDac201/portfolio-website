import React from 'react'
import './Project.scss'
import ProjectCard from '../ProjectCard/ProjectCard'
import Button from '../Button/Button'
import dataProjects from '../../data/dataProject'


const Project = () => {
  return (
    <section className="project">
      <div className="project__container">
        <div className="project__title">
          Other Noteworthy Projects
        </div>
        <div className="project__subTitle green-color">
          view in github
        </div>
        <div className="project__cards">
          {
            dataProjects.map((project, i) => <ProjectCard {...project} key={i} />)
          }
        </div>
        <div className="project__btn">
          <Button text="Show more" />
        </div>
      </div>
    </section>
  )
}

export default Project
