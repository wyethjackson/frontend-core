import React from 'react';
import {Navbar, Container, NavDropdown, Nav} from "react-bootstrap";
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
    console.log("HERERE????");
    return (
            <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">
            <img
              src="/prison_mike_no_bg.png"
              width="57"
              height="67"
              className="d-inline-block align-top"
              alt="Prison Mike logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Projects</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Games" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Codenames</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        <br/>
        <h2>Welcome to the Internet, have a look around!</h2>

    </div>
    )
}

export default Home;