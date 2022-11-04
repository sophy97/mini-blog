
// 각 포스트 세부 페이지를 보여주는 comp
// 아래 댓글 영역까지 여기서 작성

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../Context/DataContext";


const PostDetail = () => {
    // 전체데이터(컨텍스트)를 받아온 후
    // -> 포스팅데이터/댓글데이터 순으로 받아오기
    const data = useContext(DataContext);
    const {id} = useParams();
    // 게시글마다 다른 댓글 나오도록
    const [comments, setComments] = useState (
            data.state.allComments.filter(
                (comment)=>(comment.postId == id))
            );
    // [data의state.allComment]의 값이 바뀔 때마다 update되도록
    useEffect(()=>{
        setComments( data.state.allComments
            .filter((comment)=>(comment.postId == id)) )
    },[data.state.allComments])

    // data의 state값을 바로 수정해서 사용하는 방식
    const getPost =()=>{
        return data.state.postInfo.find (
        (product)=>(product.productId == id)
        )
    }


    return ( 
        <div>

        </div>
    );
}

export default PostDetail;