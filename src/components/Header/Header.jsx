import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Header() {

    const activeStyle = ({ isActive }) => { return { color: isActive ? "yellow" : "" } }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/images/logo.svg"
                            width="300"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav className=''>
                            <NavLink style={activeStyle} className='navLink' to="/">Home</NavLink>
                            <NavLink style={activeStyle} className='navLink' to="/order-preview">Order Preview</NavLink>
                            <NavLink style={activeStyle} className='navLink' to="/manage-inventory">Manage Inventory</NavLink>

                            {/* <Nav.Link href="#pricing">Manage Inventory</Nav.Link> */}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
