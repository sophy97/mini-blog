// 페이지: mypage
// 프로필박스에서 버튼 눌러 이동 > 프로필 정보 출력 & 수정하는 공간
import '../App.css';
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DataContext from "../Context/DataContext";

const MypageComp = () => {
    const data = useContext(DataContext);
    const {state, action} = data;
    return ( 
        <div>
            <br />
            <h3>my page</h3> 
            <Container className="mypage-box">
            <br />
                <Row>
                    <Col>
                        <div className="profile-info"
                        style={{width:'200px', height:'200px', 
                        backgroundColor:'white', borderRadius:'50%',
                        marginLeft:'100px', marginBottom:'30px'}}>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <br />
                            <h5>닉네임:{" "}{state.user.name}</h5>
                            <h5>팔로워:{" "}{state.user.follower}</h5>
                            <hr />
                            <button style={{borderRadius:'10%',border:'0.5px solid gray' }}>프로필사진 수정</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MypageComp;