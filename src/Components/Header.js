import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div className="header__main">
          <h1>CV Application</h1>
          <button>Preview Resume</button>
      </div>
    )
  }
}

export default Header