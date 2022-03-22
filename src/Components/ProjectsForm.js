import React, { Component } from 'react'
import '../Styles/ProjectsForm.css'
import x from "../Images/x.png"

export class ProjectsForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleDelete, handleChange, id } = this.props;
    return (
      <div className='projects-form'>
        <img src={x} alt="" onClick={() => handleDelete(id)}/>
        <form action="" id='projects__form'>
          <div className="projects__input projects__name">
            <label htmlFor="">Project Title</label>
            <input type="text" name='title' onChange={handleChange}/>
          </div>
          <div className="projects__input projects__tech">
            <label htmlFor="">Technologies Used</label>
            <input type="text" name='tech' onChange={handleChange}/>
          </div>
          <div className="projects__input projects__tasks">
            <label htmlFor="">Project Description</label>
            <input type="text" name='description' onChange={handleChange}/>
          </div>
          <div className="projects__input projects__start-date">
            <label htmlFor="">Start Date</label>
            <input type="text" name='startDate' onChange={handleChange}/>
          </div>
          <div className="projects__input projects__end-date">
            <label htmlFor="">End Date</label>
            <input type="text" name='endDate' onChange={handleChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default ProjectsForm