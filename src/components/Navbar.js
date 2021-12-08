import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/">Logo</Link>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="/ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span> Menu
                    </button>
                    <div className="navbar-collapse collapse" id="ftco-nav" >
                        <ul className="navbar-nav ml-auto mr-md-3">
                            <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to="/signup" className="nav-link">SignUp</Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">Contact</Link></li>
                            <li className="dropdown nav-item d-md-flex align-items-center">
                                <Link to="/" className="dropdown-toggle nav-link d-flex align-items-center justify-content-center icon-cart p-0" id="dropdown04" data-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-shopping-cart"></i>
                                    <b className="caret"></b>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown04">
                                    <Link to="/" className="dropdown-item">Action</Link>
                                    <Link to="/" className="dropdown-item">Another action</Link>
                                    <Link to="/" className="dropdown-item">Something else here</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/" className="dropdown-item">Separated link</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/" className="dropdown-item">One more separated link</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
