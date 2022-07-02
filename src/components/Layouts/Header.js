import React from 'react';
import {
    Navbar,
    Nav,
    Container,
    Form,
    FormControl,
    Button,
  
  } from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Redux</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;