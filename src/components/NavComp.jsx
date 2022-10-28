
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons';
// css import (위로 내려가면서 적용되므로 아래 적힌게 우선적용)
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Button from 'react-bootstrap/Button';
/*
import { useState } from 'react';
import Category from './Category';
*/



function NavComp () {
  /*
  const [cateisOn, setCateisOn] = useState(false);
  const toggleBtn =() => {
    setCateisOn (cateisOn == !cateisOn); // on,off 개념 boolean
  }
  */
return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container className='justify-content-end'>
        <Navbar.Brand>
            <FontAwesomeIcon icon={faFeather} />{" "}BLOG
        </Navbar.Brand>
        <Nav>
            <NavLink to={'/'}
            > HOME </NavLink> |
            <NavLink to={'/write'}> WRITE </NavLink> |
            <NavLink to={'/guest'}> GUEST </NavLink> |
        </Nav>
        
          <abbr title="카테고리 보기">
            <Button size="xxl" variant="dark">
            <FontAwesomeIcon icon={faSquareCaretDown} />
            </Button>
          </abbr>

      </Container>
    </Navbar>
    </>
    );
}

export default NavComp;