// Layout의 요소로, 프로필박스 우측에 고정
// 카테고리 대신. 주제별로 포스트 나누고 피드백 모달창 꺼내오기
/**
 * 홈 : 일상글
 * 주제2 : 감정(이모지로 간단히 기록하기)
 * 피드백모달 여기 넣기
 * 다크모드 토글버튼
 */
import Rating from "./Rating";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
// import { useTheme } from "styled-components";

const MenuComp = () => {
    // 모달: 동적 ui 만들기 위한 state
    let [modal, setModal] = useState(false);
    const navigate = useNavigate();


    return ( 
        <div className='themes'>
            <ul>
                <li onClick={()=>{navigate('/')}}> 📓 Log </li>
                <li onClick={()=>{navigate('/emolog')}}> 😊 Emotion-Log </li>
                <li><p className="feedback-btn"
                onClick={()=>{ setModal(!modal) }}> ⭐FeedBack 
                </p></li>
                {
                modal ? <Modal modal={modal} setModal={setModal} /> : null
                }
                {/* onClick={useTheme} 다크모드 나중에 연결할 것 */}
                <li className="theme-btn">🌜</li>
            </ul>
        </div>
    );
}

export default MenuComp;



// modal 컴포넌트 :피드백 받기위한 모달창
// (여기서 쓸거니까 당연 export안함)
const Modal = (props) => {
    
    return ( 
        <div className="feedback-modal">
            <Rating modal={props.modal} setModal={props.setModal} />
        </div>
        );
}
