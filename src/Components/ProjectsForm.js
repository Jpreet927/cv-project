import React, { Component } from 'react'
import '../Styles/ProjectsForm.css'

export class ProjectsForm extends Component {
  render() {
    return (
      <div className='projects-form'>
        <form action="" id='projects__form'>
          <div className="projects__input projects__name">
            <label htmlFor="">Project Title</label>
            <input type="text" />
          </div>
          <div className="projects__input projects__tech">
            <label htmlFor="">Technologies Used</label>
            <input type="text" />
          </div>
          <div className="projects__input projects__tasks">
            <label htmlFor="">Project Description</label>
            <input type="text" />
          </div>
          <div className="projects__input projects__start-date">
            <label htmlFor="">Start Date</label>
            <input type="text" />
          </div>
          <div className="projects__input projects__end-date">
            <label htmlFor="">End Date</label>
            <input type="text" />
          </div>
        </form>
      </div>
    )
  }
}

export default ProjectsForm