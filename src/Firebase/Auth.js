
import React, { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
import { async } from "@firebase/util";

function Auth () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignup, setIsSignup] = useState(true);
    const [isLoggined, setIsLoggined] = useState(false);

    // getAuth 함수는 공통 사용 - 바깥에 (회원가입/로그인)
    const auth = getAuth(); 
    
    useEffect( ()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            // const uid = user.uid;
                setIsLoggined(true);
            // User is signed in, see docs for a list of available properties
            // ...
            } else {
            // User is signed out
                setIsLoggined(false);
            }
        });
    },[] )
    
    const onChange = (e) =>{
        const {name, value} = e.target;
        if (name === "email") {
            setEmail(value);
        } else {
            setPassword(value);
        }
    }

    const toggleSignup = () =>{
        setIsSignup((prev)=>!prev);
    }




    const signup = async () => {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        // 결과 확인
        console.log(result);
        alert("회원가입 성공");
    }
    const signin = async () => {
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log(result);
        alert("로그인성공")
        
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        if(isSignup) {
            signup();
        } else {
            signin();
        }
    }



    return (
        <>
        <h1>로그인 페이지</h1>
        { isLoggined ? 
        <p>로그인됨{email}</p> : <p>로그인 안됨</p>
        }
        <button onClick={toggleSignup}>로그인/회원가입 전환</button>
            <form onSubmit={onSubmit}>
                <input type="text" name="email" onChange={onChange}></input>
                <input type="password" name="password" onChange={onChange}></input>
                <button>{ isSignup ? "회원가입하기" : "로그인하기" }</button>
                <button onClick={()=>{setIsLoggined(false)}}>로그아웃</button>
            </form>
        </>
    );




}

export default Auth;