import { useNavigate } from 'react-router-dom';
import { useEffect, useId, useState } from 'react';
// auth 데이터 여기서 바로 관리
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
// firebase.js 에서 import 해온 db
import {db} from '../Firebase/firebase';
// db에 접근해서 데이터를 꺼내게 도와줄 친구들
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import styled from "styled-components";
import { useDispatch } from 'react-redux';



const FirebaseLogin = () => {

  const dispatch = useDispatch();
  // @ auth : new user의 이름,나이,이메일과 비밀번호 입력받아 회원가입
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  // 가입여부 확인 state
  const [isSignup, setIsSignup] = useState(true);
  // 로그인 여부 확인 state
  const [isLoggined, setIsLoggined] = useState(false);
  // 처음에는 false, 나중에 사용자 존재 판명 이후 true > 해당 화면 render
  const [init, setInit] = useState(false); 
  
  const navigate = useNavigate();


  // getAuth 함수(firebase자체함수) : 공통 사용 - 바깥에선언(회원가입/로그인)
  const auth = getAuth(); 
  // @ auth로 회원가입한 값(uid) 
  // 빈값 > 나중에 값 할당해서 바꿔줘야 하므로 const말고 let 선언
  let uid = "";

  // ? 변화 감지 > changed를 true로 
  const [changed, setChanged] = useState(false); 
  // console.log(newName, newAge);

  // users배열 state
  const [users, setUsers] = useState([
    {
      uid:"",
      name:"",
      email:"",
      password:"",
      age:0,
    }
  ]);
  // 바로위 users배열에 컬렉션과 필드에 들어갈 데이터를 추가하기 위한 함수
  const createUsers = async (newuser) =>{
    // addDoc과 차이점 > 메모 확인
    // db collection에 내가 원하는 key로 값을 추가
    const addUser = {
      uid : newuser.uid,
      email : email,
      password : password,
      name : newName,
      age : newAge,
    }
    // setDoc함수로 db에 컬렉션 추가하는 형식을 작성함, 그 두번째인자로 addedUser를 추가해줌
    await setDoc(doc(db, "users", newuser.uid), addUser);
  }
    // db의 users 컬렉션을 가져옴 == database에 users 라는 컬렉션과 연결한다는 의미
    const usersCollectionRef = collection(db, "users");


// @ auth 로그인 : 처음값 init
  useEffect( ()=>{
    onAuthStateChanged(auth, (user) => {  // user 판명을 듣고 
        if (user) {   // user 있으면
        uid = user.uid;
          setIsLoggined(true); // 로그인 됨
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

  // 회원가입
    const signup = async () => {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        // 결과 확인
        console.log(result.user);
        createUsers(result.user);
        alert("회원가입이 완료되었습니다");
    }

    // 로그인
    const signin = async () => {
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log(result.user);
        const addUser = {
          uid : result.user.uid,
          email : result.user.email,
          password : result.user.password,
          name : result.user.newName,
          age : result.user.newAge,
        }
        dispatch({ type:"Login", payload:addUser })
        alert("로그인 성공");
        setIsSignup(true);
        navigate('/mypage');
    }
    // 제출
    const onSubmit = async (e) =>{
        e.preventDefault();
        if(isSignup) {
            signup();
        } else {
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
    setUsers(data.docs.map((doc)=>({ ...doc.data(), id: data.id})));
    }
    // 함수실행
    getUsers();
     // 뭐든 동작할때마다 changed가 true값으로 변경 > 화면 구성 후 다시 false로 돌려줘야 다시 써먹음
    setChanged(false);
    },[changed]) // 처음에 한번 그리고, changed가 불릴때마다 화면을 다시 그린다


  // 띄워줄 데이터 key값에 고유ID값 부여
  const showUsers = users.map((value,idx)=> (
    <div key={idx}> 
    <br />
      <h5>Name: {value.name}</h5>
      <p>Email : {value.email}</p>
      <p>Age: {value.age}</p> 
        {/* 증가버튼은 이 안에 있어야 각 다른 데이터마다 붙는다, users data를 map으로 돌기때문에, 그 안의 id랑 age를 넣어주면 된다.*/}
        {/* id를 넣어주는 이유는, 우리가 수정하고자 하는 데이터를 찾아야하기 때문에. */}
    </div>
    ))




return ( 
      <>
      <MyStyle>
        <h1>로그인 페이지</h1>

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

export default FirebaseLogin;


const MyStyle = styled.div`
.span:hover {
    cursor: pointer;
    transition: all 0.3s;
    transform: scale(1.2);
}`