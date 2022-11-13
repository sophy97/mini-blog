/*  Home 2 : 포스팅2 , 날짜와 기분만 간단하게 나온다
    감정 간단히 기록하는 공간 - ui 구성 카드형식으로 매일 기록하게
*/ 
import React, { Component } from "react";
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
        autoplaySpeed: 10,
        cssEase: "linear"
    };

    return (
        <>
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
