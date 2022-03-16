import React, { Component } from 'react'
import Header from './Components/Header'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className="app__main">
        <Header />
      </div>
    )
  }
}

export default App