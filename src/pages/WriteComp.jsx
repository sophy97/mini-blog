// 블로그 포스트 발행
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataContext from "../Context/DataContext";

/*
블로그 포스트 작성 영역
텍스트박스에 작성내용 > 버튼 눌러 그 내용을 포스트리스트배열에 추가
*/
const WriteComp = () => {
    // 필요한 데이터
    const navigate = useNavigate();
    const data = useContext(DataContext);
    const [newtitle, setNewtitle] = useState("");
    const [context, setContext] = useState("");
    
    // 서버사용x > 전체 데이터를 리액트에서 관리
    const addPost = () => {
        const newList = data.postlist.concat (
        // concat으로 객체 이어붙일 수 없다고 에러뜸
        //TypeError: 'x' is not iterable
        // {newtitle:newtitle},{context:context} >>같은에러 어쩌라고
        );
        data.setPostlist(newList);
        navigate('/');
    }

    return ( 
        <div>
            <h2>포스트 작성</h2>
            <input type="text" placeholder="제목"/>
            <br /><br />
            <textarea 
                onChange={(e)=>{ 
                setContext(e.target.value) }} cols="60" rows="10">
            </textarea>
            <br />
            <button onClick={(e)=>{
                const copy = [...data.postlist];
                copy.unshift(e.target.value)
                setNewtitle(copy)
                }}>💌</button>
            <p>{context}</p>
        </div>
        );
}


export default WriteComp;
