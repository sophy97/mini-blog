/*  Home 2 : 포스팅 기능 똑같이 구현
    감정 간단히 기록하는 공간 - ui 구성 카드형식으로 매일 기록하게
*/ 

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
// 폰트어썸
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

const Home2 =()=> {



    return (
    <Container className='emotion-box'>
        <Row>
            <Col>
            <FontAwesomeIcon icon={faFaceSmile} /><br />
            <FontAwesomeIcon icon={faFaceSmile} /><br />
            <FontAwesomeIcon icon={faFaceSmile} /><br />
            <FontAwesomeIcon icon={faFaceSmile} /><br />
            <FontAwesomeIcon icon={faFaceSmile} /><br />

            </Col>
            <Col>
            <FontAwesomeIcon icon={faFaceSmile} />
            </Col>
            <Col>
            <FontAwesomeIcon icon={faFaceSmile} />
            </Col>
        </Row>
        <Row>
            <Col>
                <FontAwesomeIcon icon={faFaceSmile} />
            </Col>
            <Col>
                <FontAwesomeIcon icon={faFaceSmile} />
            </Col>
            <Col>
                <FontAwesomeIcon icon={faFaceSmile} />
            </Col>
        </Row>
    </Container>
    );
}

export default Home2;
