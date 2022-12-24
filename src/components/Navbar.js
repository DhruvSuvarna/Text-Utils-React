import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  var bgColor;
  switch(props.mode){
    case 'dark': bgColor = props.modeColors.dark1; break;
    case 'blue': bgColor = props.modeColors.blue1; break;
    case 'green': bgColor = props.modeColors.green1; break;
    case 'red': bgColor = props.modeColors.red1; break;
    default: bgColor = props.modeColors.light1; break;
  }

  var bgColor2;
  switch(props.mode){
    case 'dark': bgColor2 = props.modeColors.dark2; break;
    case 'blue': bgColor2 = props.modeColors.blue2; break;
    case 'green': bgColor2 = props.modeColors.green2; break;
    case 'red': bgColor2 = props.modeColors.red2; break;
    default: bgColor2 = 'white'; break;
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === "light"? "light":"dark"}`} style={{backgroundColor: bgColor}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          {/*<form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>*/}
        </div>
        <div className="form-check form-switch mx-3">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.mode === "light"? "dark":"light"}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode === "light"? "Dark":"Light"} Mode</label>
        </div>
        <div className="dropdown">
            <Link className="btn btn-secondary dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{background: 'linear-gradient(to right, rgb(255 172 0), rgb(29 255 224), rgb(108 0 222))', color: 'black'}}>
                <strong>More Color Themes</strong>
            </Link>

            <ul className="dropdown-menu" style={{backgroundColor: bgColor2}}>
                <li>
                  <div className="form-check form-switch mx-3">
                    <input style={{backgroundColor: 'blue'}} className="form-check-input" onClick={props.blueMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className={`form-check-label text-${props.mode === "light"? "dark":"light"}`} htmlFor="flexSwitchCheckDefault">Blue Mode</label>
                  </div>
                </li>
                <li>
                  <div className="form-check form-switch mx-3">
                    <input style={{backgroundColor: 'green'}} className="form-check-input" onClick={props.greenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className={`form-check-label text-${props.mode === "light"? "dark":"light"}`} htmlFor="flexSwitchCheckDefault">Green Mode</label>
                  </div>
                </li>
                <li>
                  <div className="form-check form-switch mx-3">
                    <input style={{backgroundColor: 'red'}} className="form-check-input" onClick={props.redMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className={`form-check-label text-${props.mode === "light"? "dark":"light"}`} htmlFor="flexSwitchCheckDefault">Red Mode</label>
                  </div>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set your title here',
    aboutText: 'Set aboutText here'
}
