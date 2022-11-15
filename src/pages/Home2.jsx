/*  Home 2 : 포스팅2 , 날짜와 기분만 간단하게 나온다
    감정 간단히 기록하는 공간 - ui 구성 카드형식으로 매일 기록하게
*/ 
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import { dataEmotionLog } from '../components/EmoData';
import { useState } from "react";
import { Form } from "react-bootstrap";

function Home2 () {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    // 입력받은 '오늘의 기분' 데이터를 슬릭슬라이더에 추가하기
    const [newfeel, setNewfeel] = useState("");


    return (
        <>
        <br/><br/>
        <h2>Emotion Log</h2>
        <p>오늘의 기분을 알려주세요</p>
        <br/>
        <p>this week</p>
        <Slider {...settings}>
            { dataEmotionLog.map((item)=>(
            <div className='emotion-card'>
                    <h1 className="feeling">{item.feeling}</h1>
                    <h4>{item.date}</h4>
                    <p>{item.memo}</p>
            </div>
        )) }
        </Slider>
        <br/>
        <span className='add-emotion'>
        <h6> 기록하기 </h6> </span>
        <br />
        <input onChange={(e)=>{setNewfeel(e.target.value)}} placeholder="날짜를 입력하세요" />
        <p>{newfeel}</p>
        
        <Form>
        {['radio'].map ((type) => (
        <div key={`inline-${type}`} className="mb-3">
            <Form.Check inline
            label="😍" name="emoji" type={type} id={`inline-${type}-1`} />
            <Form.Check inline
            label="🤣" name="emoji" type={type} id={`inline-${type}-2`} />
            <Form.Check inline
            label="😊" name="emoji" type={type} id={`inline-${type}-3`} />
            <Form.Check inline
            label="😢" name="emoji" type={type} id={`inline-${type}-4`} />
            <Form.Check inline
            label="😭" name="emoji" type={type} id={`inline-${type}-5`} />
            <Form.Check inline
            label="😡" name="emoji" type={type} id={`inline-${type}-6`} />
        </div> ))
        }
        <button>등록</button>
        </Form>
        </>
    );
}

export default Home2;
