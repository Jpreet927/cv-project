import React, { Component } from 'react'
import '../Styles/CVProject.css'

export class CVProject extends Component {
  render() {
    return (
      <div className="cv-project__main">
          <div className="cv-project__header">
              <h5 id="cv-project__project-title">Project 1</h5>
              <p id="cv-project__start-end-date">Start Date - End Date</p>
          </div>
          <p id="cv-project__tech">React js, Node js, Express js</p>
          <p id="cv-project__project-description">Elit amet aliquip excepteur aliquip nulla eiusmod reprehenderit aute ut ea sit cupidatat elit fugiat. Est ipsum occaecat cupidatat tempor labore quis cillum ullamco. Et ullamco eu duis ut esse mollit esse eiusmod magna consequat officia eu non commodo.</p>
      </div>
    )
  }
}

export default CVProject