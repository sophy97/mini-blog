/*
홈 (HOME) : 렌더링 시 첫페이지
기본 레이아웃과 > home인 포스팅리스트를 보여주는 공간
버튼 > PostModal 열어서 포스팅 내용 보여주는 방식
*/ 
// 이 파일 맨 아래 따로 모달컴포넌트 두개 만들어뒀음

// import { useEffect } from 'react';
import { useState } from 'react';
import '../App.css';

const Home =()=>{

    // 기존 포스팅리스트에 필요한 데이터 (제목, 내용 / 좋아요 /인덱스)
    let [title, setTitle] = useState( [
        '제목3', 
        '제목2', 
        '제목1'
    ] );
    let [content, setContent] = useState( [
        '제목3 내용입니다', 
        '제목2 내용입니다', 
        '제목1 내용입니다, 내용 내용 내용 내용 내용'
    ] );
    let [thumbUp, setThumbUp] = useState( [0, 0, 0] );
    let [clickNum, setClickNum] = useState(0);

    // 새값 받아오는공간 (받아오는 공간과 받아온값 저장하는 배열을 따로 둔다)
    let [input, setInput] = useState( {
        inputTitle:"",
        inputContent:"",
    } );
    const date = new Date();

    // 포스트보기 모달 / 글쓰기모달 관련 데이터
    const [postmodal, setPostmodal] = useState(false);
    const [writemodal, setWritemodal] = useState(false);


    // onClick에 실행할 함수
    function addTitle() {
        let newTitle = [...title];
        newTitle.unshift(input.inputTitle);
        setTitle(newTitle);
    }
    function addContent() {
        let newContent = [...content];
        newContent.unshift(input.inputContent);
        setContent(newContent);
    }
    function changeThumbUp(idx) {
        let newThumbUp = [...thumbUp];
        newThumbUp[idx] = (thumbUp[idx] + 1);
        setThumbUp(newThumbUp);
    }

// 정확히 이해 안 됨. 렌더링 무한루프 에러에 쓰라고...
// useEffect(()=>{
//  console.log(addTitle);
// },[])

return (
    <div className="App">

    {/* 포스팅리스트 출력 박스 - map으로 title배열 출력*/}
        <div className='Wrapper-posts'>
        {
        title.map (function(post, idx) {
            return (
            <div className='post-list-box' key={idx}>
                <h5 onClick={()=>{setClickNum(idx)}}>
                {post} 　
                <span className='thumb-up' onClick={ ()=>{ changeThumbUp(idx) } }> 👍 </span> 
                {thumbUp[idx]} 
                </h5>
                <button className='delete-btn' onClick={()=> {
                //splice: 배열에서 원하는 값 제거(n번째, m개)
                //배열or객체 수정하려면 카피해서 거기다 해야 함
                let copy = [...title];
                let copy2 = [...content];
                copy.splice(idx,1);
                copy2.splice(idx,1);
                setTitle(copy);
                setContent(copy2);
                }}> 삭제 
                </button>
                <span style={{position:'right'}} onClick={ ()=>{ setPostmodal(!postmodal) } }>
                <h6 className='post-detail'> 📗 상세보기 </h6>
                </span>
                {
                    postmodal === true ? 
                    <PostModal title={title} content={content} date={date} clickNum={clickNum}/>
                    : null
                }
                <h6>📜 발행일: {date.getMonth()+1}/{date.getDate()}</h6>
                <hr />
            </div>
                );
        }) }
        </div>
        <span onClick={ ()=>{ setWritemodal(!writemodal) } }>
        <h6 className='write-btn'> 🖋 글쓰기 </h6>
        </span>
        {
            writemodal === true ? 
            <WriteModal input={input} setInput={setInput} addTitle={addTitle}
                        clickNum={clickNum} addContent={addContent} />
            : null
        }

    </div>
    );
}
export default Home;




// 세부 포스트 보여주는 모달
function PostModal (props) {
    return (
    <div className='post-modal'>
        <h4>제목: {props.title[props.clickNum]}</h4>
        <p> 📜 발행: {props.date.getMonth()+1}월{props.date.getDate()}일 </p>
        <p>{props.content[props.clickNum]}</p>
    </div>
    )
}

// 글쓰기 폼 보여주는 모달
function WriteModal (props) {
    return (
    <div className='writeform'>
        <input onChange={ (e)=>{ props.setInput({...props.input, inputTitle:e.target.value}) } } 
        placeholder="제목" className='title-input' /> <br />
        <input onChange={ (e)=>{ props.setInput({...props.input, inputContent:e.target.value}) } } 
        placeholder="내용을 입력하세요" className='content-input' />
        <br />
        <button className='addpost-btn' onClick={ ()=>{ 
            props.addTitle(props.inputTitle);
            props.addContent(props.inputContent);
            
            }}> 포스트 등록 </button>
    </div>
    )
}