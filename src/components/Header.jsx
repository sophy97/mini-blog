// 헤더 영역 > 그 안에 피드백 받을 modalComp 포함
// > 헤더, 푸터는 APP에 바로 넣어둠
import Rating from "./Rating";
import '../App.css';
import { useState } from 'react';

const Header = () => {
    // 모달: 동적 ui 만들기 위한 state
    let [modal, setModal] = useState(false);
    
    return (
        <div>
            
            <div className="header">
            <h5 style={{}}
            onClick={()=>{
                setModal(!modal);
            }}>🧐평가하기</h5>
{
    modal ? <Modal modal={modal} setModal={setModal} /> : null
} 
            <p>header: 사진넣기</p>
            </div>
        </div>
        );
}

// 헤더 default 내보내기
export default Header;



// modal 컴포넌트 :피드백 받기위한 모달창
// (여기서 쓸거니까 당연 export안함)
const Modal = (props) => {
    
    return ( 
        <div className="feedback-modal">
            <Rating modal={props.modal} setModal={props.setModal} />
        </div>
    );
}