import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbarr.css';

const Navbarr = () => {
    return (
         <div>
            <Navbar collapseOnSelect fixed="top" expand = "lg" bg="dark" variant="dark">
                    <Container fluid>
                        {/* brand name  */}
                        <Navbar.Brand href="/home"><span className="brand-name  ">SigmaHospital</span></Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">

                            {/* navbar menu item  */}
                        <Nav className="nav-menu-container mx-auto fs-4" >
                            <Nav.Link as={Link} className="nav-item-text" to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} className="nav-item-text" to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} className="nav-item-text" to="/healthtips">Health Tips</Nav.Link>
                            <Nav.Link as={Link} className="nav-item-text" to="/shop">Shop</Nav.Link>
                            <Nav.Link as={Link} className="nav-item-text" to="/aboutus">About Us</Nav.Link>
                        </Nav>
                        <Form className="d-flex ms-auto">
                            <FormControl
                            type="search"
                            placeholder="Search here"
                            className="w-100"
                            aria-label="Search"
                            />
                            <Button  variant="warning text-white fw-bold fs-5 outline-success">Search</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>

            
        </div>
    );
};

export default Navbarr;