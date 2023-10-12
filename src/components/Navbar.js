//Shortcut of template - rfc
import React from "react";
import PropTypes from 'prop-types' /*Shortcut - impt*/
import { Link } from "react-router-dom";


export default function Navbar(props) {
  const red = (event) => {
    props.colorMode('danger');
    props.showAlert("Danger Mode Activated", "success");
  }
  const green = (event) => {
    props.colorMode('success');
    props.showAlert("Green Mode Activated", "success");
  }
  return ( 
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> {/* `${}` - This is called Template Literal */}
        <Link className="navbar-brand" to="/">{props.title}</Link>  {/*props is parameter we have written in Bracket of Navbar and title we have specified in App.js  */}
        {/* <a className="navbar-brand" href="#">{props.title}</a>    props is parameter we have written in Bracket of Navbar and title we have specified in App.js  */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <a href="#" className="nav-link">Home<span className="sr-only">(current)</span></a> --> Changes for gihub deployment.. Removed all routing*/}
              <Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">{props.aboutText}</Link>  {/*We have specified in app.js*/}
              {/* <a href="/about" className="nav-link">{props.aboutText}</a>  We have specified in app.js */}
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-danger rounded mx-2" style={{width:"20px", height:"20px"}} onClick={red} />
            {/* onclick wants function and not to call function.. writing props.toggleMode('warning would be calling function) */}
            <div className="bg-success rounded mx-2" style={{ height: '20px', width: '20px' }} onClick={green} />
          </div>
          <div className={`custom-control custom-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1" />
            <label className="custom-control-label" htmlFor="customSwitch1">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string, //Shortcut - pts
  aboutText: PropTypes.string
} //We are defining PropTypes so that we dont mistakely set different datatype

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
} // If we want to make it compulsory to put prop details in app.js.. even if we set a default prop then also its okay to this statement and it won't throw error..

Navbar.defaultProps = {
  title: 'Code With Om',
  aboutText: 'About'
} //Default props in case we dont mention in app.js and if we set props value in app.js then that value will override default...

