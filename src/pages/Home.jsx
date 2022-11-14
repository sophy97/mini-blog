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
        '별 헤는 밤', 
        '제목2', 
        '제목1'
    ] );
    let [content, setContent] = useState( [
        '걱정도 이름과 이런 묻힌 있습니다. 못 너무나 보고, 하나에 했던 묻힌 봅니다. 소학교 헤일 어머니, 별 아침이 프랑시스 이제 까닭입니다. 어머니, 어머니 노루, 별 봅니다. 책상을 하나의 가을 가슴속에 불러 하나에 듯합니다. 둘 쉬이 당신은 우는 불러 풀이 아스라히 가득 까닭입니다. 언덕 나는 하나에 잔디가 내 불러 당신은 있습니다. 봄이 못 이국 동경과 이름자 계십니다. 소학교 새겨지는 마디씩 언덕 남은 된 별 그리고 밤을 있습니다. 그리고 별이 토끼, 하나에 노루, 오는 패, 버리었습니다. 잔디가 어머님, 이름과, 봅니다. 써 하나의 나의 나는 하나에 자랑처럼 봄이 까닭입니다. 이름자 슬퍼하는 이런 새워 불러 하나에 가슴속에 하나에 까닭입니다. 무성할 이름자 계절이 강아지, 까닭입니다. 동경과 어머님, 가을로 내일 같이 까닭입니다. 무덤 너무나 부끄러운 까닭입니다. 별빛이 이름을 가득 다 버리었습니다. 가난한 북간도에 패, 거외다. 별 내일 어머니, 이름과 아직 노새, 나는 책상을 내 있습니다. 새겨지는 딴은 너무나 이름을 나는 프랑시스 거외다. 나는 라이너 별 무성할 시와 위에 다 봄이 많은 듯합니다.', 
        '제목2 내용입니다2222222', 
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
        <br/><br/>
        <h2>Posts</h2>
        <p>포스트 제목을 클릭하고 하단의 '상세보기' 버튼을 누르면 해당 포스트 내용이 보입니다!</p>
        <br/>
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
        <span style={{float:'top', marginBottom:'15px'}} onClick={ ()=>{ setPostmodal(!postmodal) } }>
        <h6 className='post-detail'> 📗 상세보기 </h6>
        </span>
        {
            postmodal === true ? 
            <PostModal 
            title={title} content={content} date={date} clickNum={clickNum} setPostmodal={setPostmodal} />
            : null
        }
        <br /><br />

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
        <span onClick={()=>{props.setPostmodal(!PostModal)}} className='close-btn' >닫기</span>
    </div>
    );
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
    );
}