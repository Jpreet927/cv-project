import React, { Component } from 'react'
import '../Styles/AddButton.css'
import plus from "../Images/plus.png"

export class AddButton extends Component {
  render() {
    return (
      <div className='addbutton__main'>
          <img src={plus} alt="Add More" />
      </div>
    )
  }
}

export default AddButton