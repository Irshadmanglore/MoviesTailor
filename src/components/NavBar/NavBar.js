import React from 'react'
import './NavBar.css'
import logo from './image/logo.png'
import { Navbar,Container,Offcanvas,Nav,Form,FormControl,Button } from 'react-bootstrap';
function NavBar() {
  return (
    <div className="navbar">
 
    <img className="logo" src={logo} alt="logo"/>
   <div>
   <Navbar    expand={false}  >
   
  <Container fluid>
  
    <Navbar.Brand href="#Banner" style={{color:"white"}}>Movies Trailors</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Movies</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Login</Nav.Link>
          <Nav.Link href="#action2">Register</Nav.Link>
          
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
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
   </div>



</div>
  )
}

export default NavBar
