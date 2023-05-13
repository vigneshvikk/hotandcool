import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  return (
    <div>
    <Navbar bg="dark" variant="dark" id='nav'>
        <Container>
          <Navbar.Brand href="" >
            <img
              alt=""
              src="./restaurant-logo-designer-needs.png"
              width="60"
              height="60"
              className="d-inline-block align-center "  id='img'
            />{' '}
           <strong className="  p-3 fs-4"> Hot<span className="N"> N </span >Spicy</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header