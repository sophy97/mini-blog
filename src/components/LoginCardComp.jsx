// 로그인 상태에서만 나타나는 카드 컴포넌트의 내용
import Card from 'react-bootstrap/Card';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../Context/DataContext";

const LoginCardComp = (props) => {

// user데이터 불러와서 로그인정보와 연결
const data = useContext(DataContext);
const {state, action} = data;


    return ( 
        <div className="profile-container" style={{marginTop:'5vh', marginBottom:'5vh'}}>
            <Card style={{ width: '13rem', border:'none'}}>
                <Card.Img variant="top" src=
                {
                    state.user.profile ? (state.user.profile): " "
                } 
                />
                <Card.Body>
                    <Card.Title>
                    {
                        state.user ? (state.user.name): " "
                    }
                    </Card.Title>
                    <Card.Text>
                    {data.state.user.name} 님, 반갑습니다😉 <br /><br />
                    <button onClick={ props.logOut }
                    style={{padding:'2px'}} > Logout 
                    </button> 
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default LoginCardComp;