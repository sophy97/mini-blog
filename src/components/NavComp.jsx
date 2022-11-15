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



function NavComp () {

  // 네브바 꾸미기 
  const originNav = { color:"white", textDecorationLine:"none"}
  const activeStyle = { color:"#ADA4D5", textDecorationLine:"none", 
                        transition:'all 250ms ease-out', fontWeight:'bolder'} 
  //네비게이터
  const navigation = useNavigate();

  // 데이터 (로그인데이터생성 / 전역데이터:컨텍스트불러오기)
  const [login, setLogin] = useState(true);
    const data = useContext(DataContext);
    const {state, action} = data;

  // 컴포넌트가 마운트되자마자 로그인정보 확인! (useEffect)
  useEffect(()=>{
    setLogin( data.state.user.name ? true : false )
  }, [data.state.user.name])  //새로 로그인했을 때 화면 바뀌도록

  // 로그아웃을 위한 이벤트함수
  const logOut = () => {
    setLogin(false);  //로그아웃
    navigation("/");  //어디서 로그아웃하든 홈으로 이동
    alert("로그아웃하였습니다");
    data.state.action.setUser(null); //user값도 null로
    
  }


  return (
    <>
    {/* 네브바 전반 디자인(from bootstrap)*/}
    <Navbar bg="dark" variant="light">
      <Container className='justify-content-end'>
        <Nav>
        <NavLink to='/' 
                style={ ({isActive})=> isActive ? activeStyle : originNav } 
                end>
                　Home　　
        </NavLink>        
        {/* 로그인/로그아웃 시 출력할 컴포넌트 */}
        <Navbar.Collapse className="justify-content-end">
            {login ? (
              <Nav>
                {/**로그인true상태: 출력될 컴포넌트 */}
                <NavLink to="/mypage" 
                style={ ({isActive})=> isActive ? activeStyle : originNav } >
                  mypage😀: {data.state.user.name}
                </NavLink>　
                <Button variant="outline-light" style={{padding:'2px'}} onClick={ logOut }>Logout</Button>{" "}
              </Nav>
            ) : (
              <div>
                {/** 로그인false: 출력될 컴포넌트 */}
                <Button variant="outline-light" style={{padding:'2px'}} onClick={()=>{navigation('/login')}}>Login</Button>{" "}
              </div>
            )}
        </Navbar.Collapse>
        <NavLink to='/games' 
                style={ ({isActive})=> isActive ? activeStyle : originNav }
                >
                　　PLAY
        </NavLink>     
        </Nav>

      </Container>
    </Navbar>

    </>
    );
}

export default NavComp;


