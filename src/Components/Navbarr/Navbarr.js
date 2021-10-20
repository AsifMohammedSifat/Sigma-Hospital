import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Navbarr.css';

const Navbarr = () => {
    const {login,user,logout}=useAuth();
    return (
         <div>
            <Navbar  collapseOnSelect fixed="top" expand = "lg" bg="dark" variant="dark">
                    <Container fluid>
                        {/* brand name  */}
                        <Navbar.Brand href="/home"><span className="brand-name  ">SigmaHospital</span></Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">

                            {/* navbar menu item  */}
                        <Nav className="nav-menu-container mx-auto fs-4" >
                            <Nav.Link as={Link} className="fs-5 nav-item-text" to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} className="fs-5 nav-item-text" to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} className="fs-5 nav-item-text" to="/healthtips">Health Tips</Nav.Link>
                            <Nav.Link as={Link} className="fs-5 nav-item-text" to="/calldoctor">Call Doctor</Nav.Link>
                            <Nav.Link as={Link} className="fs-5 nav-item-text" to="/aboutus">About Us</Nav.Link>
                            {!user.email ? <Nav.Link as={Link} className="fs-5 nav-item-text" to="/login">Login</Nav.Link>
                            :<Nav.Link  className="fs-5 nav-item-text" onClick={logout}>LogOut 
                            
                             <div style={{fontSize:'10px'}} className="mx-auto"> <button className="rounded-pill  bg-warning border-0 p-2 text-dark fw-bold">
                            {/* <img  className="" src={user.photoURL} alt="" /> */}
                            <small>{user.displayName}</small>
                            </button></div>              
                            </Nav.Link>
                            }
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