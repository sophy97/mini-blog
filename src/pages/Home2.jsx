/*  Home 2 
    포스팅2 , 달력에 이모티콘으로 간단히 그날의 기분을 기록
*/ 
import React from "react";
import '../App.css';
import { useState } from "react";
import TextInput from "../components/TextInput";
import Select from "../components/Select";
import {Col, Container, Row} from "react-bootstrap";
import Calendar from "../components/Calendar";

// select box에 props로 보낼 옵션값
const feelings = ["😍", "🤣", "😊", "😐", "😢", "😭", "😡"];

function Home2 () {

    // 값을 받아올 공간 (초기값:공백) / 객체형태
    const [formInput, setFormInput] = useState({
        memo : "",
        date : "",
        feelings :"",
    });
    //값 들어오는지 체크
    console.log(formInput);

    return (
        <>
        <br/><br/>
        <h2>Emotion Log</h2>
        <br /><br /><br />
        <p>오늘의 감정을 기록해보세요</p>
        
            
                <Calendar />
                <Container className="h2-box">
                <Row>
                    <Col>

                    </Col>
                </Row>
                <div className="h2form">
                    <div className="h2form-item">
                    <p>오늘의 기분은 어떤가요?</p>
                    <Select 
                    value={formInput.feelings}
                    setValue={(value)=>{
                        setFormInput((state)=>({
                            ...state,
                            feelings:value
                        }));
                    }} 
                    // select 선택지를 props에 넘겨야
                    options={feelings}
                    />
                    </div>
                    <div className="h2form-item">
                    <p>간단한 메모를 남길 수 있어요!</p>
                    <TextInput 
                    value={formInput.memo}
                    setValue={(value2)=>{
                        setFormInput((state)=>({
                            ...state,
                            memo: value2
                        }));
                    }}
                    />
                    </div>
                    <div className="h2form-btns">
                    <button
                    // 클릭시 저장되었다는 얼럿창과 함께 폼 초기화
                    onClick={() => {
                    alert("저장되었습니다.");
                    setFormInput ({
                        memo : "",
                        date : "",
                        feelings :"",
                        });
                    }}>
                    등록</button>
                    </div>
                </div>
        </Container>
        </>
    );
}

export default Home2;
