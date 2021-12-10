import React from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    Nav,
    NavbarBrand
} from 'reactstrap';


function NavbarComponent() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="mb-5">
            <Navbar color="light" className="fixed-top" light expand="sm">
                <NavbarBrand href="/">NotesApp</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                           <Link to="/" className="nav-link">  Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/login" className="nav-link">Login</Link>
                        </NavItem>
                        <NavItem>
                           <Link to="/signup" className="nav-link">Signup</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/addnote" className="nav-link">Add Note</Link> 
                        </NavItem>
                        <NavItem>
                          <Link to="/about" className="nav-link">About</Link> 
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent
