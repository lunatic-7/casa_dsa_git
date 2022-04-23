import React from 'react'
import { Link, useLocation} from "react-router-dom";


const Navbar = ({ toggleMode, text, mode }) => {
    let location = useLocation(); // location will simply trace the path of our component. eg. /about
    return (
        <>
            <nav className={`navbar navbar-expand-lg fixed-top navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <h3 className="navbar-brand my-1">DSA</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-2">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Code</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/notes" ? "active" : ""}`} to="/notes">Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>

                        <div className="d-flex">
                            <div className={`form-check form-switch text-${mode === "dark" ? "light" : "dark"}`}>
                                <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="mode" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><b><i>{text}</i></b></label>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar