import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from './Profile';
import Category from './Category';

// 프로필과 카테고리 comp를 그리드로 감싸주는 부분
// 자체를 레이아웃에 붙임

const ProCateBox = () => {
    return ( 
        <div className="category-container">
        <Container>
        <Row>

        <Col sm={4} style={{border:'1px dotted lightgray'}} >
            <Profile />
        </Col>
        <Col sm={8} style={{border:'1px dotted lightgray'}} >
            <Category />
        </Col>
        

        </Row>
        </Container>
        </div>
    );
}

export default ProCateBox;