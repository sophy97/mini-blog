// 상태관리 > 리덕스 > post제목 변경해보기

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "./modules/post";

const Post = () => {
    // 새 포스트 값 받아오는공간 (받아오는 공간과 받아온값 저장하는 배열을 따로 둔다)
    const [input, setInput] = useState();
    // uesSelector로 값 가져오기
    const postObj = useSelector((state)=>(state.postTitle));
    //useDispatch를 이용해서 dispatch 가져오기
    const dispatch = useDispatch();






    return ( 
        <div>
            <input type="text" onChange={(e)=>{ setInput(e.target.value)}} />
            <h3>
            제목: {postObj} 
            </h3>
            <button onClick={()=>{dispatch(changeTitle(input))}}>제목 수정</button>
        </div>
    );
}

export default Post;