// 페이지: login
// Nav바 에서 버튼 눌러 이동 > 유저 정보 입력받는 공간(bootstrap)
// 로그인 끝나면 홈화면으로 이동 + "~님 반갑습니다" alert
import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import DataContext from '../Context/DataContext';

const Login = () => {
    const [name, setName] = useState("");
    const {action} = useContext(DataContext);
    const navigate = useNavigate();

    const loginUser =()=> {
        action.setUser ( { name:name, profile:null, likelist:[] } );
        navigate('/');
    }

    return ( 
        <Form className='m-5' onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>아이디를 입력하세요</Form.Label>
          <Form.Control type="text" placeholder="id" 
            onChange={(e)=>{setName(e.target.value)}} 
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호를 입력하세요</Form.Label>
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          {/* type이 submit이면 전체 폼태그에 onSubmit함수 붙여야함 */}
          로그인하기
        </Button>
      </Form>
    );
}

export default Login;