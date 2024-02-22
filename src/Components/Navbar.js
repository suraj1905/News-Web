import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    let {mode, toggleMode} = this.props
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href='/'>News Today - Fastest news provider</a>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to='/business'>Business</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to='/entertainment'>Entertainment</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to='/technology'>Technology</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to='/health'>Health</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to='/sports'>Sports</Link>
                </li>
            </ul>
            </div>
            <div className="form-check form-switch">
            <input type="checkbox" className="form-check-input" id="customSwitches" onClick={toggleMode}/>
            <label className={`form-check-label text-light`} htmlFor="customSwitches">{`${mode=== 'light'?'Light':'Dark'}`} mode</label>       
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        </nav>
      </div>
    )
  }
}
