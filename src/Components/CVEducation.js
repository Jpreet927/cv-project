import React, { Component } from 'react'
import '../Styles/CVEducation.css'

export class CVEducation extends Component {
  render() {
    return (
      <div className="cv-education__main">
          <div className="cv-education__header">
              <h5 id="cv-education__institution">Experience 1</h5>
              <p id="cv-education__start-end-date">Start Date - End Date</p>
          </div>
          <p id="cv-education__major">Bachelor of Engineering in Electrical Engineering</p>
          <p id="cv-education__awards">Deans List (Fall 2022)</p>
          <p id="cv-education__gpa">GPA: 4.0</p>
      </div>
    )
  }
}

export default CVEducation