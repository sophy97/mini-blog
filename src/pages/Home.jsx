// 홈 (HOME) : 렌더링 시 첫페이지
// 기본 레이아웃과, 그 자식요소인 POSTLIST를 보여주는 공간

import { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DataContext from '../Context/DataContext';
import '../App.css';

// 컴포넌트
// 전체데이터(컨텍스트)-> 포스팅데이터/댓글데이터 순으로 받아오기
export const Home = () => {
    // 전역 데이터 받아오기
    const {action, state} = useContext(DataContext);
    // const {id} = useParams();
    const naviate = useNavigate();
    const date = new Date();

    const postLists = state.postInfo.map((post) => {
        return (
            <div className='postlist'>
                <h5>{post.postTitle}
                <span onClick={()=>action.setPostInfo(post.like+1)}>{post.like}{"  "}🖤</span>
                </h5>
                <p>📜발행일: {date.getMonth()+1}월 {date.getDate()}일 </p>
                <button className='modal-btn' onClick={()=>{action.setPostInfo(!post.modal)}}>
                    상세보기
                </button>
                {  post.modal ? <Modal /> : null  } {" "}
                <button className='modify-btn'
                onClick={()=>{naviate('/write')}}>
                    글수정
                </button>
        </div>
        )
    }
        
    )

    //리턴
    return ( 
        <div className='post-list-box'>
        {/* 포스팅박스 출력 작업을 반복하기 위해 map()사용 */}
        {/* 나중에 모달 버튼은,
            id값으로 각 포스트 구분해서 요청한 해당 페이지만 모달로 보여주도록 */}

            <div className='postlist'>
            {postLists}
            </div>
            
            
        
        








            <Outlet />
        </div>

    );
}

export default Home;



// ModalComp 그냥 여기 만들기
const Modal = () => {
    return (
        <div className='modal-box'>
            <h6>제목</h6>
            <p>글내용입니다 글내용입니다 글내용입니다</p>
            <p>글내용 상세보기 페이지입니다. 모달창</p>
        </div>
    );
}