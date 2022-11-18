// 네브바에 출력/관련 내용들
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
// css import (위로 내려가면서 적용되므로 아래 적힌게 우선적용)
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import DataContext from '../Context/DataContext';
import { Button } from 'react-bootstrap';
import Rating from "./Rating";

function NavComp () {

  // 네브바 꾸미기 
  const originNav = { color:"white", textDecorationLine:"none"}
  const activeStyle = { color:"#FFFACD", textDecorationLine:"none"} 
  // 모달: 동적 ui 만들기 위한 state
  const [modal, setModal] = useState(false);
  const navigation = useNavigate();
  const data = useContext(DataContext);
  const {state, action} = data;


  return (
    <>
    {/* 네브바 디자인(from bootstrap) */}
    <Navbar bg="dark" variant="light">
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
          onClick={()=>{ setModal(!modal) }}> 　　⭐FeedBack </span>
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
// (여기서 쓸거니까 당연 export안함)
const Modal = (props) => {
    
  return ( 
      <div className="feedback-modal">
          <Rating modal={props.modal} setModal={props.setModal} />
      </div>
      );
}
