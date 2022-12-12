// 네브바에 출력/관련 내용들
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// css import (위로 내려가면서 적용되므로 아래 적힌게 우선적용)
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useContext, useState } from 'react';
import DataContext from '../Context/DataContext';
import Rating from "./Rating";

function NavComp () {

  // 네브바 꾸미기 
  const originNav = { color:"black", textDecorationLine:"none"}
  const activeStyle = { color:"darkblue", textDecorationLine:"none", fontSize:"1.2em" } 
  // 모달: 동적 ui 만들기 위한 state
  const [modal, setModal] = useState(false);


  return (
    <>
    {/* 네브바 디자인(from bootstrap) */}
    <Navbar bg="light" variant="light" className='mynavbar'>
      <Container className='justify-content-end'>
      <Nav>
        <NavLink to="/" 
        style={ ({isActive})=> isActive ? activeStyle : originNav } >
        Home</NavLink>
      </Nav>
      <Nav>
        <NavLink to="/about"
        style={ ({isActive})=> isActive ? activeStyle : originNav } >
      　About</NavLink>
      </Nav>
      <span className="feedback-btn"
        onClick={()=>{ setModal(!modal) }}>　⭐FeedBack </span>
        {
        modal ? <Modal modal={modal} setModal={setModal} /> : null
        }
      </Container>
    </Navbar>
    </>
    );
}

export default NavComp;




// modal 컴포넌트 :피드백 받기위한 모달창
const Modal = (props) => {
    
  return ( 
      <div className="feedback-modal">
          <Rating modal={props.modal} setModal={props.setModal} />
      </div>
      );
}
