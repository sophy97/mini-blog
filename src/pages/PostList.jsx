import { Outlet } from 'react-router-dom';
import '../App.css';

const PostList = () => {
    return ( 
        <div className='post-list-box'>
            <p>포스팅 리스트 :id 사용해 <br /> 주소 연결하고
                useParam도 사용해야함
            </p>








            <Outlet />
        </div>
    );
}

export default PostList;