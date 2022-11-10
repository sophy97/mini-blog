// 페이지: mypage
// 프로필박스에서 버튼 눌러 이동 > 프로필 정보 출력 & 수정하는 공간
import '../App.css';
import { Col, Container, Row } from "react-bootstrap";
import DataContext from "../Context/DataContext";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import ProfileUpdate from "../pages/ProfileUpdate";

const MypageComp = () => {
    const data = useContext(DataContext);
    const {state} = data;
    // const navigate = useNavigate();
    return ( 
        <div>
            <br />
            <h3>my page</h3> 
            <Container className="mypage-box">
            <br /><br />
                <Row>
                    <Col> {/** 프로필 사진과 사진을 수정할 모달창 */}  
                    { state.user.profile ?
                        <div style={{
                                width:"200px", height :"200px", 
                                backgroundColor:'white', borderRadius:'50%',
                                marginLeft:'100px', marginBottom:'20px', marginTop:'30px',
                                backgroundImage: `url(${state.user.profile})`,
                                backgroundSize:"cover" }}>
                        </div>
                        : 
                        <div style={{width:"200px", height :"200px", 
                                backgroundColor:'white', borderRadius:'50%',
                                marginLeft:'100px', marginBottom:'30px',
                                textAlign:'center',backgroundSize:"cover" }}>
                                <p style={{textAlign:'center', paddingTop:'45%', color:'darkgray'}}>
                                이미지를 추가하세요</p>
                        </div>
                    }<ProfileUpdate />
                    </Col>
                    <Col>
                        <div>
                            <br />
                            <h5>닉네임:{" "}{state.user.name}</h5>
                            <h5>팔로워:{" "}{state.user.follower}</h5>
                            <hr />
                            <button className='modify-btn1'
                            >프로필사진 수정</button>{" "}{" "}
                            <button className='modify-btn2'>태그 수정</button>
                        </div>
                    </Col>
                </Row>
            </Container> <br /><br />
        </div>
        
    );
}

export default MypageComp;