// 날씨 정보 주는 컴포넌트 > 위치는 프로필 우측
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Weather = () => {
    // js처리방식 : 위>아래 라서 url과 키값, 위치값 순서 중요함
    const API_KEY = "df39660fc891b75f918b22159e9ad35e";
    const [location, setLocation] = useState('');
    const [result, setResult] = useState({});

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=&lang=kr&appid=${API_KEY}`;


const searchWeather = async(e) => {
    if(e.key === 'Enter') {
        try{
            const data = await axios ({
                method :'get',
                url:url
            })
        console.log(data);
        setResult(data);

        } catch(err) {
            alert(err);
        }
    }
}

    return ( 
        
        <WeatherWrap>
            <div className="weatherContentWrap">
                <h4>🌤 weather</h4>
                <input placeholder="도시를 입력하세요" type="text"
                onKeyDown={searchWeather}
                value={location} onChange={(e)=>{setLocation(e.target.value)}}
                />

                {
                    Object.keys(result).length !== 0 && (
                    <ResultWrap>
                        <div className="city">{result.data.name}</div>
                        <div className="temperature">
                        {Math.round(((result.data.main.temp - 273.15) *10)) / 10 }˚c
                        </div>
                        <div className="sky">{result.data.weather[0].main}</div>                    
                    </ResultWrap>
                )}
                
            </div>

            
        </WeatherWrap>
        
    );
}

export default Weather;

const WeatherWrap = styled.div`
    width:40vw;
    height:40vh;
    border:1px solid gray;

    .weatherContentWrap {
        
    }
`;

const ResultWrap = styled.div`
    margin-top:30px;
    padding:10px;  
    border:1px solid black;
    border-radius:8px;
`;