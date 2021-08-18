import React from 'react'
import './Project.scss'
import ProjectCard from '../ProjectCard/ProjectCard'

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
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

      </div>
    </section>
  )
}

export default Project
