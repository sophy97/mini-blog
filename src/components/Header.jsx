// 헤더 영역 > 그 안에 피드백 받을 modalComp까지 포함
// 전체를 레이아웃Comp로 전달한다 (X) 
// > 일단 헤더푸터 APP에 바로 넣어둠

import Modal from "./Modal";
import Rating from "./Rating";

const Header = () => {
    return ( 
        <div>
            <div className="header">
                <p>헤더임..</p>
                <Modal />
                
            </div>
            
        </div>
    );
}

export default Header;