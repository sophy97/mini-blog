// Profile컴포넌트 (레이아웃페이지소속)
// 프로필 보여주는 박스 출력
// 프로필 박스에서 프로필수정 버튼클릭 > 수정할 수 있는 mypage 로 이동

import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import DataContext from '../Context/DataContext';
import '../App.css';


const Profile = () => {
    // user데이터 불러와서 로그인정보와 연결
    const data = useContext(DataContext);
    const {state} = data;

    const navigate = useNavigate();
    return ( 
        <div className="profile-container">
            <Card style={{ width: '15rem', fontSize:"font-family: 'Gowun Dodum', sans-serif"}}>
                <Card.Img variant="top" src=
                {
                    state.user.profile ? (state.user.profile)
                    :
                    ("../img/기본프사.jpg")
                } />
                <Card.Body>
                <Card.Title>{state.user.name}</Card.Title>
                <Card.Text>
                {state.user.name}의 블로그입니다 <br />
                #일상 #맛집 #공부
                </Card.Text>
                <Button className='btn-sm' variant="outline-dark"
                onClick={()=>navigate('/mypage')}
                >프로필 수정</Button>{' '}
                </Card.Body>
            </Card>
        </div>
    );
}

export default Profile;