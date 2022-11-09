// 홈 (HOME) : 렌더링 시 첫페이지
// 기본 레이아웃과 > home인 포스팅리스트를 보여주는 공간
// 각 포스트제목 버튼 > PostModal 열어서 포스팅 내용 보여주는 방식..(맨아래)
import { useState } from 'react';
import '../App.css';

const Home =()=>{

    // 포스팅리스트에 필요한 데이터 << 데이터컨텍스트 여기 안씀..
    let [title, setTitle] = useState( [
        '오늘 맛있는거 먹었다', 
        '길냥이 친해지기', 
        '테스트용, 세번째 포스트'
    ] );
    let [thumbUp, setThumbUp] = useState( [0, 0, 0] );
    let [clickNum, setClickNum] = useState(0);
    let [input, setInput] = useState('');
    const date = new Date();
    // 포스트모달 관련 데이터
    const [postmodal, setPostmodal] = useState(false);


    // onClick에 실행할 함수
    function addTitle(input) {
        let newTitle = [...title];
        newTitle.unshift(input);
        setTitle(newTitle);
    }
    function changeThumbUp(idx) {
        let newThumbUp = [...thumbUp];
        newThumbUp[idx] = thumbUp[idx] + 1;
        setThumbUp(newThumbUp);
    }

return (
    <div className="App">

    {
        title.map(function(content, idx) {
            return (
            <div className='post-list-box' key={idx}>
                <h5 onClick={()=>{setClickNum(idx)}}>
                {content}
                <span className='thumb-up' onClick={ ()=>{ changeThumbUp(idx) } }> 👍 </span> 
                {thumbUp[idx]} 
                </h5>
                <h6>📜 발행일: {date.getMonth()+1}/{date.getDate()}</h6>
                <hr/>
            </div>            
                )
        })
    }
    
    <span onClick={ ()=>{ setPostmodal(!postmodal) } }>
            <h6 style={{cursor:'pointer'}}> 📗 상세보기 </h6></span>
            {
                postmodal === true ? 
                <PostModal title={title} date={date} clickNum={clickNum}/>
                : null
            }
        <div className='write'>
            <input onChange={ (e)=>{ setInput(e.target.value) } } />
            <button onClick={()=>{ addTitle(input) }}> 등록 </button>
        </div>
    
    </div>
    );
}
export default Home;


// 세부 포스트 보여주는 모달
function PostModal (props) {
    return (
    <div className='post-modal'>
        <h4>제목: {props.title[props.clickNum]}</h4>
        <p> 📜 발행: {props.date.getMonth()+1}월{props.date.getDate()}일 /
            {props.date.getHours()}:{props.date.getMinutes()} </p>
        <p>내용 내용 내용 내용 내용 내용<br/> 내용 내용 내용 내용</p>
    </div>
    )
}