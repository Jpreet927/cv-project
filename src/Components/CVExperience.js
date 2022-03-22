import React, { Component } from 'react'
import '../Styles/CVExperience.css'

export class CVExperience extends Component {
  render() {
    return (
      <div className="cv-experience__main">
          <div className="cv-experience__header">
              <h5 id="cv-experience__job-title">Experience 1</h5>
              <p id="cv-experience__start-end-date">Start Date - End Date</p>
          </div>
          <p id="cv-experience__company-details">Company Name, Job Location</p>
          <p id="cv-experience__job-details">Elit amet aliquip excepteur aliquip nulla eiusmod reprehenderit aute ut ea sit cupidatat elit fugiat. Est ipsum occaecat cupidatat tempor labore quis cillum ullamco. Et ullamco eu duis ut esse mollit esse eiusmod magna consequat officia eu non commodo.</p>
      </div>
    )
  }
}

export default CVExperience