import Spinner from 'react-bootstrap/Spinner';

// 네브바링크 > 미니게임 등 엔터 페이지
const GamesComp = () => {
    return ( 
        <div>
            <br/><br/>
            <h2>PlayGround</h2>
            <h6> 미니게임을 즐겨 보세요 !</h6>
            <br/>
            <p style={{display:'inline-block'}}>준비중입니다 　</p>
            <Spinner animation="border" size='xl' variant="warning" />
            <br /><br /><br />
        </div>
    );
}

export default GamesComp;