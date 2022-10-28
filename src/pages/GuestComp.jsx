import { useState } from "react";
import '../App.css';

const GusetComp = () => {
    const [guest, setGuest] = useState("");
    return ( 
        <div>
            <h2>방명록 작성하셈</h2>
            <div className="guest-box">
            👤게스트가 적은 글들 <br />
            🎃게스트 2 <br />
            👀게스트 3 <br />
            <p>{guest}</p>
            </div>
            <textarea cols="30" rows="10"></textarea> <br />
            <button onClick={(e)=>{
                setGuest(e.target.value);
            }} className="guest-btn">✅</button>
        </div>
    );
}

export default GusetComp;