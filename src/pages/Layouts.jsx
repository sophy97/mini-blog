// Layout !
// 라우팅 시 고정될 영역을 상위로 묶어둔다
// 이 컴포넌트 자체를 Outlet으로 > App.js에 내보냄

import { Outlet } from "react-router-dom";
import Profile from '../components/Profile';
import NavComp from "../components/NavComp";
import { Col, Container, Row } from "react-bootstrap";
import Weather from "../components/Weather";




const Layout = () => {
    return ( 
        <div>
            <NavComp />
            <Container>
                <Row>
                    <Col><Profile /></Col>
                    <Col><Weather /></Col>
                </Row>
                    
            </Container>
            
            {/* Outlet으로 이 자체를 App.js로 내보냄 */}
            <Outlet />
        </div>
    );
}

export default Layout;