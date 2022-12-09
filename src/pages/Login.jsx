import { useNavigate } from 'react-router-dom';
import { useEffect, useId, useState } from 'react';
// auth 데이터 여기서 바로 관리
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
// 파이어베이서 파일에서 import 해온 db
import {db} from '../Firebase/firebase';
// db에 접근해서 데이터를 꺼내게 도와줄 친구들
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import styled from "styled-components";



const Login = () => {

  // @ auth : 이메일과 비밀번호 입력받아 회원가입
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true);
 // input으로 받을 새로운 사람의 이름과 나이
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  
  // 처음에는 false이고 나중에 사용자 존재 판명이 모두 끝났을 때 true를 통해 해당 화면을 render해야 함
  const [init, setInit] = useState(false); 
  const [isLoggined, setIsLoggined] = useState(false);
  const navigate = useNavigate();

  // getAuth 함수(firebase자체함수) : 공통 사용 - 바깥에선언(회원가입/로그인)
  const auth = getAuth(); 
  // @ auth로 회원가입한 값(uid) 
  // 빈값 > 나중에 값 할당해서 바꿔줘야 하므로 const말고 let 선언
  let uid = "";

  // ? 변화 감지 > changed를 true로 
  const [changed, setChanged] = useState(false); 
  // console.log(newName, newAge);

    // ? 이따 users 추가하고 삭제하는거 진행을 도와줄 state
    // db에 이렇게 객체형식으로 유저 정보 담아두고 꺼내쓰고싶음
    // name,age랑 email, password를 아래 객체로 연결해서 db
  const [users, setUsers] = useState([
    {
      name:"",
      email:"",
      password:"",
      age:0,
    }
  ]);
  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(db, "users");

    // ? 유니크 id를 만들기 위한 useId(); - react 18 기능, 이 훅을 이렇게 사용하는게 맞는지 확신없음
    const uniqueId = useId();
    //console.log(uniqueId);



// @ auth 로그인 : 처음값 init
  useEffect( ()=>{
    onAuthStateChanged(auth, (user) => {  // user 판명을 듣고 
        if (user) {   // user 있으면
        uid = user.uid;
          setIsLoggined(true); // 로그인 됨
          console.log(uid);
        } else {
          setIsLoggined(false); // 로그인 안됨
        }
        setInit(true); // user 판명 끝
    });
  },[] )

  //@ auth 
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

// @기존 회원가입
    const signup = async () => {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        // 결과 확인
        console.log(result);
        alert("회원가입이 완료되었습니다");
    }

    // 로그인
    const signin = async () => {
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log(result);
        alert("로그인 성공");
        navigate('/mypage');
        
    }
    // 제출
    const onSubmit = async (e) =>{
        e.preventDefault();
        if(isSignup) {
            signup();
        } else {
            alert("회원정보를 찾을 수 없습니다. 회원가입하세요")
            signin();
        }
    }



  // 시작될때 한번만 실행 // 읽어오기 - R
  useEffect(()=>{
  	// 비동기로 데이터 받을준비
    const getUsers = async () => {
    // getDocs로 컬렉션안에 데이터 가져오기
    const data = await getDocs(usersCollectionRef);
    // users에 data안의 자료 추가. 객체에 id 덮어씌움
    setUsers(data.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
    }
    // 함수실행
    getUsers();
     // 뭐든 동작할때마다 changed가 true값으로 변경 > 화면 구성 후 다시 false로 돌려줘야 다시 써먹음
    setChanged(false);
    },[changed]) // 처음에 한번 그리고, changed가 불릴때마다 화면을 다시 그릴거다

  // 생성 - C
  const createUsers = async () =>{
    // addDoc을 이용해서 내가 원하는 collection에 내가 원하는 key로 값을 추가한다.
    await addDoc(usersCollectionRef, {name: newName, age:Number(newAge)});
    // 화면 업데이트를 위한 state 변경
    setChanged(true);
  }

  // 업데이트 - U
  const updateUser = async(id, age) =>{
    // 내가 업데이트 하고자 하는 db의 컬렉션의 id를 뒤지면서 데이터를 찾는다
    const userDoc = doc(db, "users", id)
    // 내가 업데이트 하고자 하는 key를 어떻게 업데이트할 지 준비, 주의:db에는 문자열로 저장돼있음 > createUsers()함수 안에서 age를 생성할때 숫자열로 형변환 해줘야한다
    const newField = {age: age + 1};
    // updateDoc()을 이용해서 업데이트
    await updateDoc(userDoc, newField);
  }

  // 삭제 - D
  const deleteUser = async(id) =>{
    // 내가 삭제하고자 하는 db의 컬렉션의 id를 뒤지면서 데이터를 찾는다
    const userDoc = doc(db, "users", id);
    // 기다렸다가 deleteDoc을 이용해서 삭제
    await deleteDoc(userDoc);
  }

  // 띄워줄 데이터 key값에 고유ID값 부여
  const showUsers = users.map((value)=> (
    <div key={uniqueId}> 
      <h4>Name: {value.name}</h4>
      <h4>Email : {value.email}</h4>
      <p>Age: {value.age}</p> 
      
        {/* 증가버튼은 이 안에 있어야 각 다른 데이터마다 붙는다, users data를 map으로 돌기때문에, 그 안의 id랑 age를 넣어주면 된다.*/}
        {/* id를 넣어주는 이유는, 우리가 수정하고자 하는 데이터를 찾아야하기 때문에. */}
        <button onClick={()=>{updateUser(value.id, value.age)}}>Increase Age</button>
        <button onClick={()=>{deleteUser(value.id)}}>Delete User</button>
    </div>
    ))





return ( 
      <>
      <MyStyle>
        <h1>로그인 페이지</h1>
        {/* { init === isLoggined ? 
        <p>{email}</p> : <p>로그인 안됨</p>
        } */}
        <span className="span" onClick={toggleSignup}>◀ 로그인/회원가입 전환 ▶</span> 
        <br /><br />
            <form onSubmit={onSubmit}>
                <input type="text" name="email" onChange={onChange}></input>
                <input type="password" name="password" onChange={onChange}></input>
                <button>{ isSignup ? "회원가입하기" : "로그인하기" }</button>
                <button onClick={()=>{setIsLoggined(false)}}>로그아웃</button>
            </form>
        </MyStyle>

      {/* onchange를 이용해서, 변하는 값을 state로 저장한다. */}
      <input type="text" placeholder='name...' onChange={(event)=> {setNewName(event.target.value)}}/>
      <input type="number" placeholder='age...' onChange={(event)=> {setNewAge(event.target.value)}}/>
      <button onClick={createUsers}>Create User</button>
        {showUsers}
        {uid}

      </>
      );
    }

export default Login;


const MyStyle = styled.div`
.span:hover {
    cursor: pointer;
    transition: all 0.3s;
    transform: scale(1.2);
}`