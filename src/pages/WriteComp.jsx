// 블로그 포스트 발행
//  Context 쓰려다 대 실 패



// import { useContext, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import DataContext from "../Context/DataContext";

// /*
// 블로그 포스트 작성 영역
// 텍스트박스에 작성내용 > 버튼 눌러 그 내용을 포스트리스트배열에 추가
// */
// const WriteComp = () => {
//     // 필요한 데이터
//     const navigate = useNavigate();
//     const data = useContext(DataContext);
//     const {state, action} = useContext(DataContext);

//     let [input, setInput] = useState('');

//     function addTitle(input) {
//         let newTitle = [...data.title];
//         newTitle.unshift(input);
//         data.setTitle(newTitle);

//         // data.setPostlist(newList);
//         // navigate('/');
    

//     return ( 
        
//         <div className='publish'>
//             <input onChange={ (e)=>{ setInput(e.target.value) } } />
//             <p>{input}</p>
//             <button onClick={()=>{addTitle(input)}}>등록하기</button>
//         </div>
        
//         );

// }}

// export default WriteComp;

// const [newpost, setNewpost] = useState({
//     newTitle : "",
//     newContext : "",
// } );

// // 서버사용x > 전체 데이터를 리액트에서
// const addPost = () => {
//     const newList = data.postlist.concat (
//     // concat으로 객체 이어붙일 수 없다고 에러뜸
//     // 객체는 자식이 될수없다?
//     //TypeError: 'x' is not iterable
//     // {newtitle:newtitle},{context:context} >>해봐도 같은에러.. 어쩌라ㅜㅜㅜ
//     );

// return아래

// <h2>포스트 작성</h2>
//         <input type="text" placeholder="제목"
//         onChange={(e)=>{ 
//             setNewpost.newTitle(e.target.value) }} />
//         <br /><br />
//         <textarea placeholder="내용 작성"
//             onChange={(e)=>{ 
//             setNewpost.newContext(e.target.value) }} cols="70" rows="15">
//         </textarea>
//         <br />
//         <button onClick={(e)=>{
//             const copy = [...state.postlist];
//             copy.concat(e.target.value);
//             setNewpost(newTitle=copy);
//             setNewpost(newContext=e.target.value);
//             }}>발행</button>