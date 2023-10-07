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
              src="./kisspng-coffee-bean-cafe-single-origin-coffee-coffee-beans-transparent-background-5a78ef52dbb6a1.2904727815178750269.png"
              width="100"
              height="60"
              className="d-inline-block align-center "  id='img'
            />{' '}
           <strong className="  p-3 fs-4"> Hot<span className="N"> N </span >Cool</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header