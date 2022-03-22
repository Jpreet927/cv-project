import React, { Component } from 'react'
import CVExperience from './CVExperience'
import CVProject from './CVProject'
import CVEducation from './CVEducation'
import '../Styles/CVPreview.css'

export class CVPreview extends Component {
  render() {
    return (
      <div className="cv-preview__main">
           <div className="cv-preview__container">
                <div className="cv-preview__profile">
                    <h1>Full Name</h1>
                    <div className="cv-preview__contact">
                        <p><span>Phone:</span> 123-456-7890</p>
                        <p><span>Email:</span> email@email.com</p>
                        <p><span>Linkedin:</span> linkedin.com/name</p>
                        <p><span>Github:</span> github.com/name</p>
                    </div>
                </div>
                <div className="cv-preview__skills-container">
                    <h3>Skills</h3>
                    <hr />
                    <p><span>Skills:</span> Quis id excepteur voluptate laboris esse in excepteur cupidatat ea veniam.</p>
                </div>
                <div className="cv-preview__education-container">
                    <h3>Education</h3>
                    <hr />
                    <div className="cv-preview__education">
                        <CVEducation />
                    </div>
                </div>
                <div className="cv-preview__experience-container">
                    <h3>Work Experience</h3>
                    <hr />
                    <div className="cv-preview__experiences">
                        <CVExperience />
                        <CVExperience />
                        <CVExperience />
                    </div>
                </div>
                <div className="cv-preview__project-container">
                    <h3>Personal Projects</h3>
                    <hr />
                    <div className="cv-preview__projects">
                        <CVProject />
                        <CVProject />
                        <CVProject />
                    </div>
                </div>
          </div>
      </div>
    )
  }
}

export default CVPreview