/*  Home 2 
    포스팅2 , 달력에 이모티콘으로 간단히 그날의 기분을 기록
*/ 
import '../App.css';
import { useCallback, useState } from "react";
// import TextInput from "../components/TextInput";
// import Select from "../components/Select";
// import {Col, Container, Row} from "react-bootstrap";
// import Calendar from "../components/Calendar";
import Info from '../components/Info';


const feelings = ["😍", "🤣", "😊", "😐", "😢", "😭", "😡"];
// select box에 props로 보낼 옵션값



function Home2 () {



    // 값을 받아올 공간 (초기값:공백) / 객체형태
    const [formInput, setFormInput] = useState({
        memo : "",
        date : "",
        feelings :"",
    });
    //값 들어오는지 체크 
    console.log(formInput);
    
    // Info관련 정보
    const [color, setColor] = useState("");
    const [movie, setMovie] = useState("");

    const onChangeHandler = useCallback(e => {
        if (e.target.id === "color") setColor(e.target.value);
        else setMovie(e.target.value);
    }, []);



        return (
                <div>
                <div>
                    <label>
                    What is your favorite color of rainbow ?
                    <input id="color" value={color} onChange={onChangeHandler} />
                    </label>
                </div>
                <div>
                    What is your favorite movie among these ?
                    <label>
                    <input
                        type="radio"
                        name="movie"
                        value="Marriage Story"
                        onChange={onChangeHandler}
                    />
                    Marriage Story
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="movie"
                        value="The Fast And The Furious"
                        onChange={onChangeHandler}
                    />
                    The Fast And The Furious
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="movie"
                        value="Avengers"
                        onChange={onChangeHandler}
                    />
                    Avengers
                    </label>
                </div>
                <Info color={color} movie={movie} />
                </div>
            );
        };

    export default Home2;

            {/* <Container className="h2-box">
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
            </Container> */}




