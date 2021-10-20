import React from 'react';
// import {Link} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/books'>All Books</Nav.Link>
                <Nav.Link href='/books/new'>Create New Book</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>


      // <nav>
      //   <Link to="/"> Home </Link>
      //   <Link to="/books/new">Add a New Book </Link>
      //   <Link to="/books"> All Books </Link>
      // </nav>
    )
  }
}

export default NavBar;