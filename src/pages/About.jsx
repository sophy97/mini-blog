import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return ( 
        <>
        <div className='aboutpage'>
            <video autoPlay muted loop src="write.mp4" className='video'>
            </video>
            <h5>기록하다</h5>
        </div>
        <Container>
            <Row>
                <Col>Home</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
        </Container>
        </>
    );
}

export default About;