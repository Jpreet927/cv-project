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
      employmentCount: 1,
      employment: [{
        id: 0,
        company: "",
        city: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: ""
      }],
      projectCount: 1,
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
    this.setState({
      employmentCount: this.state.employment.length,
      employment: [...this.state.employment, {
        id: this.state.employment.length,
        company: "",
        city: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: ""
      }],
    })
    console.log(this.state.employment);
    console.log(this.state.employmentCount);
  }

  addProject = () => {
    this.setState({
      projectCount: this.state.projects.length,
      projects: [...this.state.projects, {
        id: this.state.projects.length,
        title: "",
        tech: "",
        startDate: "",
        endDate: ""
      }]
    })
    console.log(this.state.projects);
    console.log(this.state.projectCount);
  }

  deleteEmployment = (id) => {
    this.setState ({
      employment: this.state.employment.filter((element) => element.id !== id)
    });
  }
  
  deleteProject = (id) => {
    this.setState ({
      projects: this.state.projects.filter((element) => element.id !== id)
    });
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
                  handleDelete={this.deleteEmployment}
                />
              )
            })}
            <AddButton onClick={this.addEmployment} />
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
                  handleDelete={this.deleteProject}
                />
              )
            })}
            <AddButton onClick={this.addProject}/>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App