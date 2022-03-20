import React, { Component } from 'react'
import '../Styles/ExperienceForm.css'

export class ExperienceForm extends Component {
  render() {
    return (
      <div className='experience-form'>
        <form action="" id='experience__form'>
          <div className="experience__input experience__name">
            <label htmlFor="">Company Name</label>
            <input type="text" />
          </div>
          <div className="experience__input experience__city">
            <label htmlFor="">City</label>
            <input type="text" />  
          </div>
          <div className="experience__input experience__position">
            <label htmlFor="">Your Position</label>
            <input type="text" />
          </div>
          <div className="experience__input experience__tasks">
            <label htmlFor="">Your Tasks & Accomplishments</label>
            <input type="text" />
          </div>
          <div className="experience__input experience__start-date">
            <label htmlFor="">Start Date</label>
            <input type="text" />
          </div>
          <div className="experience__input experience__end-date">
            <label htmlFor="">End Date</label>
            <input type="text" />
          </div>
        </form>
      </div>
    )
  }
}

export default ExperienceForm