/*
홈 (HOME) : 렌더링 시 첫페이지
기본 레이아웃과 > home인 포스팅리스트를 보여주는 공간
버튼 > PostModal 열어서 포스팅 내용 보여주는 방식
*/ 

import { useEffect, useState } from 'react';
import '../public/Modal.css';

const Home =()=> {

    // 기존 포스팅리스트에 필요한 데이터 (제목, 내용 / 인덱스카운터)
    const [title, setTitle] = useState( [
        '별 헤는 밤', 
        '제목2', 
        '제목1'
    ] );
    const [content, setContent] = useState( [
        '걱정도 이름과 이런 묻힌 있습니다. 못 너무나 보고, 하나에 했던 묻힌 봅니다. 소학교 헤일 어머니, 별 아침이 프랑시스 이제 까닭입니다. 어머니, 어머니 노루, 별 봅니다. 책상을 하나의 가을 가슴속에 불러 하나에 듯합니다. 둘 쉬이 당신은 우는 불러 풀이 아스라히 가득 까닭입니다. 언덕 나는 하나에 잔디가 내 불러 당신은 있습니다. 봄이 못 이국 동경과 이름자 계십니다. 소학교 새겨지는 마디씩 언덕 남은 된 별 그리고 밤을 있습니다. 그리고 별이 토끼, 하나에 노루, 오는 패, 버리었습니다. 잔디가 어머님, 이름과, 봅니다. 써 하나의 나의 나는 하나에 자랑처럼 봄이 까닭입니다. 이름자 슬퍼하는 이런 새워 불러 하나에 가슴속에 하나에 까닭입니다. 무성할 이름자 계절이 강아지, 까닭입니다. 동경과 어머님, 가을로 내일 같이 까닭입니다. 무덤 너무나 부끄러운 까닭입니다. 별빛이 이름을 가득 다 버리었습니다. 가난한 북간도에 패, 거외다. 별 내일 어머니, 이름과 아직 노새, 나는 책상을 내 있습니다. 새겨지는 딴은 너무나 이름을 나는 프랑시스 거외다. 나는 라이너 별 무성할 시와 위에 다 봄이 많은 듯합니다.', 
        '제목2 내용입니다2222222', 
        '제목1 내용입니다, 내용 내용 내용 내용 내용'
    ] );
    const [clickNum, setClickNum] = useState(0);

    // 새값 받아오는공간 (받아오는 공간과 받아온값 저장하는 배열을 따로 둔다)
    const [input, setInput] = useState( 
        {
        inputTitle:"",
        inputContent:"",
        }
    );
    const date = new Date();

    // 포스트보기 모달 / 글쓰기모달 관련 데이터
    const [postmodal, setPostmodal] = useState(false);
    const [writemodal, setWritemodal] = useState(false);


    // 포스트 등록 onClick에 실행할 함수
    function addTitle() {
        const newTitle = [...title];
        newTitle.unshift(input.inputTitle);
        setTitle(newTitle);
    }
    function addContent() {
        const newContent = [...content];
        newContent.unshift(input.inputContent);
        setContent(newContent);
    }

    

return (
    <div className="App">
        <br/><br/>
        <h2>Posts</h2>
        <p>포스트 제목을 클릭해서 내용을 확인하세요</p>
        <br/>
    {/* 포스팅리스트 출력 박스 - map으로 title배열 출력*/}
        <div className='Wrapper-posts'>
        {
        title.map (function(post, idx) {
            return (
            <div className='post-list-box' key={idx}>
                <h5 onClick={
                ()=>{setClickNum(idx); setPostmodal(!postmodal)}}>
                {post}
                </h5>
                <h6> 🧾 발행일: {date.getMonth()+1}/{date.getDate()}</h6>
                <button className='delete-btn' onClick={()=> {
                //splice: 배열에서 원하는 값 제거(n번째, m개) / 배열or객체 수정하려면 카피본에 할 것
                let copy = [...title]; let copy2 = [...content];
                copy.splice(idx,1); copy2.splice(idx,1);
                alert("이 포스트가 삭제됩니다");
                setTitle(copy); setContent(copy2)
                }}> 삭제 </button>
        {
            postmodal === true ? 
            <PostModal 
            title={title} content={content} date={date} clickNum={clickNum} 
            postmodal={postmodal} setPostmodal={setPostmodal} />
            : null
        }
            <br />
            <hr />
            </div>
                );
        }) 
        }
    </div>
        <span onClick={ ()=>{ setWritemodal(!writemodal) } }>
        <h6 className='write-btn'> 🖋 포스트 작성하기 </h6>
        </span>
        {
            writemodal === true ? 
            <WriteModal input={input} setInput={setInput} addTitle={addTitle}
                    clickNum={clickNum} addContent={addContent} setWritemodal={setWritemodal}/>
            : null
        }
        
        <br /><br />

    </div>
    );
}
export default Home;



// 세부 포스트 보여주는 모달
function PostModal (props) {

    // 이 컴포넌트 실행될때 뒷배경 스크롤 방지
    useEffect(() => {
        document.body.style= `overflow: hidden`;
        return () => document.body.style = `overflow: auto`
    }, []);

    return (
    <div className='back-modal'>
        <div className="overlay">
            <div className='modal-content'>
                <h4>제목: {props.title[props.clickNum]}</h4>
                <p> 📜 발행: {props.date.getMonth()+1}월{props.date.getDate()}일 </p>
                <p>{props.content[props.clickNum]}</p>
                <span onClick={()=>{props.setPostmodal(!props.postmodal)}} className='close-modal'>닫기</span>
            </div>
        </div>
    </div>
    );
}


// 글쓰기 폼 모달
function WriteModal (props) {

    // 이 컴포넌트 실행될때 뒷배경 스크롤 방지
    useEffect(() => {
        document.body.style= `overflow: hidden`;
        return () => document.body.style = `overflow: auto`
    }, []);

    return (
    <div className='back-modal'>
        <div className='overlay'>
            <div className='modal-content2'>
                <input onChange={ (e)=>{ props.setInput({...props.input, inputTitle:e.target.value}) } } 
                placeholder="제목" className='title-input' /> <br />
                <textarea onChange={ (e)=>{ props.setInput({...props.input, inputContent:e.target.value}) } } 
                placeholder="내용을 입력하세요" className='content-input' />
                <br />
                <span onClick={()=>{
                    props.setWritemodal(!WriteModal); alert("포스트 등록을 취소합니다") }} 
                className='close-btn'> 작성 취소 </span>
                <br /><br />
                <button className='addpost-btn' onClick={ ()=>{ 
                    props.addTitle(props.inputTitle);
                    props.addContent(props.inputContent);
                    props.setWritemodal(!WriteModal); 
                    alert("등록되었습니다");
                    }}> 포스트 등록 </button>
            </div>
        </div>
    </div>
    );
}