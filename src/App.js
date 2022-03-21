import React, { Component } from 'react'
import Header from './Components/Header'
import './App.css'
import ProfileForm from './Components/ProfileForm'
import { EducationForm } from './Components/EducationForm'
import ExperienceForm from './Components/ExperienceForm'
import ProjectsForm from './Components/ProjectsForm'
import Footer from './Components/Footer'
import AddButton from './Components/AddButton'

export class App extends Component {
  constructor(props) {
    super(props);
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
        institution: "",
        major: "",
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

  addEmployment = () => {
    this.setState((prev) => ({
      ...prev,
      employment: [...prev.employment, {
        id: 0,
        company: "",
        city: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: ""
      },
    ],
    }))
  }

  render() {
    const { profile, education, employmentCount, employment, projectCount, projects } = this.state;
    return (
      <div className="app__main">
        <Header />
        <ProfileForm 
          fullName={profile.fullName}
          tagline={profile.tagline}
          phone={profile.phone}
          email={profile.email}
          linkedin={profile.linkedin}
          github={profile.github}
        />
        <EducationForm 
          institution={education.institution}
          major={education.major}
          startDate={education.startDate}
          endDate={education.endDate}
          awards={education.awards}
          gpa={education.gpa}
        />
        <div className="experience-project-form-section">
          <div>
            <h3>Work Experience</h3>
            {employment.map((element) => {
              return (
                <ExperienceForm 
                  key={element.id}
                  id={element.id}
                  company={element.company}
                  city={element.city}
                  position={element.position}
                  tasks={element.tasks}
                  startDate={element.startDate}
                  endDate={element.endDate}
                />
              )
            })}
            <AddButton />
          </div>
          <div>
            <h3>Personal Projects</h3>
            {projects.map((element) => {
              return (
                <ProjectsForm 
                  key={element.id}
                  id={element.id}
                  title={element.title}
                  tech={element.tech}
                  startDate={element.startDate}
                  endDate={element.endDate}
                />
              )
            })}
            <AddButton />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App