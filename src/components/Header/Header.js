import React from 'react'
import { FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import {FiShoppingCart} from "react-icons/fi";
import {Link} from "react-router-dom";
import { cartContext } from '../../context/Context';
import Badge from "react-bootstrap/Badge"


const Header = () => {

    const{cart,setCart}=React.useContext(cartContext)
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
        <Link to="/">
        <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
        </Link>
      
      <Navbar.Text className='search'>
        <FormControl
        placeholder='search products'
        className='m-auto'
        style={{width:500}}
        />
      </Navbar.Text>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <Link to="/cart">
        <FiShoppingCart color="white" fontSize="25px" />
        <Badge>{cart.length}</Badge>
        </Link>
      
      </Dropdown.Toggle>
    </Dropdown>
    </Container>
  </Navbar>
  )
}

export default Header