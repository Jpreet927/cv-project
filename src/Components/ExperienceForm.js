import React, { Component } from 'react'
import '../Styles/ExperienceForm.css'
import x from "../Images/x.png"

export class ExperienceForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleDelete, handleChange, id } = this.props;

    return (
      <div className='experience-form'>
        <img src={x} alt="" onClick={() => handleDelete(id)}/>
        <form action="" id='experience__form'>
          <div className="experience__input experience__name">
            <label htmlFor="">Company Name</label>
            <input type="text" name='company' onChange={handleChange}/>
          </div>
          <div className="experience__input experience__city">
            <label htmlFor="">City</label>
            <input type="text" name='city' onChange={handleChange}/>  
          </div>
          <div className="experience__input experience__position">
            <label htmlFor="">Your Position</label>
            <input type="text" name='position' onChange={handleChange}/>
          </div>
          <div className="experience__input experience__tasks">
            <label htmlFor="">Your Tasks & Accomplishments</label>
            <input type="text" name='tasks' onChange={handleChange}/>
          </div>
          <div className="experience__input experience__start-date">
            <label htmlFor="">Start Date</label>
            <input type="text" name='startDate' onChange={handleChange}/>
          </div>
          <div className="experience__input experience__end-date">
            <label htmlFor="">End Date</label>
            <input type="text" name='endDate' onChange={handleChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default ExperienceForm