/*  Home 2 : 포스팅2 , 날짜와 기분만 간단하게 나온다
    감정 간단히 기록하는 공간 - ui 구성 카드형식으로 매일 기록하게
*/ 
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import { dataEmotionLog } from '../components/EmoData';

function Home2 () {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };
    // const [input2, setInput2] = useState( {
    //     memo:"",
    //     date:"",
    //     feeling:""
    // } );
    return (
        <>
        <br/><br/>
        <h2>Emotion Log</h2>
        <p>오늘의 느낌을 짧게 표현하세요</p>
        <br/>
        <Slider {...settings}>
            { dataEmotionLog.map((item)=>(
            <div className='emotion-card'>
                <div className='card-top'>
                    <h1 className="feeling">{item.feeling}</h1>
                    <h4>{item.date}</h4>
                </div>
                <div className='card-bottom'>
                    <br />
                    <h6>{item.memo}</h6>
                </div>
            </div>
        )) }
        </Slider>
        
        <span className='add-emotion'>
        <h6> 기록하기 </h6>
        </span> <br />
        </>
    );
}

export default Home2;


// 감정기록 입력받는 모달 > 완성 예정 (feeling:dropdown)
// function AddEmotion (props) {
//     return (
//     <div className='addemotion'>
//         <input onChange={ (e)=>{ props.setInput2({...props.input2, memo:e.target.value}) } } /> <br />
        
//         <button className='addemotion-btn' onClick={ ()=>{ 
            
//             }}> 추가 </button>
//     </div>
//     );
// }