// 홈 (HOME) : 렌더링 시 첫페이지
// 기본 레이아웃과, 그 자식요소인 POSTLIST를 보여주는 공간

import { useContext, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import DataContext from '../Context/DataContext';
import '../App.css';

// 컴포넌트
// 전체데이터(컨텍스트)-> 포스팅데이터/댓글데이터 순으로 받아오기
export const Home = () => {
    // 전역 데이터 받아오기
    const data = useContext(DataContext);
    const {state, action} = useContext(DataContext);
    // 인풋창 입력값 저장하는 state
    const date = new Date();

    const postBox = state.postlist.map ((post) => {
        return (
            <div className='postlist'>
                <h5>{post.postTitle}
                <span>🖤{"  "}{post.like}</span>
                </h5>
                <p>📜발행일: {date.getMonth()+1}/{date.getDate()}</p>
                
                <button className='delete-btn'
                onClick={()=> {
                //배열or객체 수정하려면 카피뜨고,배열에서 내가 원하는 항목만 삭제
                let copy = [...state.postlist];
                  //splice (n번째, m개)
                action.setPostlist(copy.splice(1));
                }}> 삭제 </button>
            </div>
            )
        }
    );

    //리턴
    return ( 
        <div className='post-list-box'>
        {/* 포스팅박스 출력 작업을 반복하기 위해 map()사용 */}
            <div className='postlist'>
            {postBox}
            
            </div>

            <Outlet />
        </div>

    );
}

export default Home;




// 각 포스트 세부 페이지를 보여주는 comp 
// 걍 여기 작성하기, 모달처럼 각 포스트 클릭해서 보이게

function PostDetail (){
    const [detail, setDetail] = useState("");
    return (
        <div className='post-detail'>
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}