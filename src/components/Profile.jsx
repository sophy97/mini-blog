import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Profile = () => {
    return ( 
        <div className="profile-container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../img/profile.jpg" />
                <Card.Body>
                <Card.Title>똥깨</Card.Title>
                <Card.Text>
                OOO의 블로그입니다 <br />
                #일상 #맛집 #ootd
                </Card.Text>
                <Button size="xs" variant="outline-dark">프로필 수정</Button>{' '}
                <Button size="xs" variant="outline-dark">글쓰기</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Profile;
