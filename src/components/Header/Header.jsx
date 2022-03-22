import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Header() {
    
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
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav className=''>
                            <Nav.Link href="#home">Order</Nav.Link>
                            <Nav.Link href="#features">Order Review</Nav.Link>
                            <Nav.Link href="#pricing">Manage Inventory</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
