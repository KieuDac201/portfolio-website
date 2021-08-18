import React from 'react'
import './ProjectCard.scss'

const ProjectCard = () => {
  return (
    <div className="project__card">
      <div className="project__card-top">
        <div className="project__card-fileIcon">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        </div>
        <div className="project__card-githubIcon">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </div>
      </div>
      <div className="project__card-content">
        <div className="project__card-title">
          Time to have more fun
        </div>
        <p className="project__card-desc">
          A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS
        </p>
        <div className="project__card-list">
          <div className="project__card-item">
            HTML
          </div>
          <div className="project__card-item">
            CSS
          </div>
          <div className="project__card-item">
            JS
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
