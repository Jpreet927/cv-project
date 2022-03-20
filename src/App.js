import React, { Component } from 'react'
import Header from './Components/Header'
import './App.css'
import ProfileForm from './Components/ProfileForm'
import { EducationForm } from './Components/EducationForm'
import ExperienceForm from './Components/ExperienceForm'
import ProjectsForm from './Components/ProjectsForm'
import Footer from './Components/Footer'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      profile: {
        fullName: "",
        tagline: "",
        phone: "",
        email: "",
        linkedin: "",
        github: ""
      },
      education: {
        name: "",
        degree: "",
        startDate: "",
        endDate: "",
        awards: "",
        gpa: ""
      },
      employmentCount: 0,
      employment: [{
        id: 0,
        company: "",
        city: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: ""
      }],
      projectCount: 0,
      projects: [{
        id: 0,
        title: "",
        tech: "",
        startDate: "",
        endDate: ""
      }]
    }
  }

  render() {
    return (
      <div className="app__main">
        <Header />
        <ProfileForm />
        <EducationForm />
        <div className="experience-project-form-section">
          <div>
            <h3>Work Experience</h3>
            <ExperienceForm />
          </div>
          <div>
            <h3>Personal Projects</h3>
            <ProjectsForm />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App