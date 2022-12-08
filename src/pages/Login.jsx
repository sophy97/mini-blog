// 페이지: login
// Nav바 에서 버튼 눌러 이동 > 유저 정보 입력받는 공간(bootstrap)
// 로그인 끝나면 홈화면으로 이동 + "~님 반갑습니다" alert
// import { useNavigate } from 'react-router-dom';
import { useEffect, useId, useState } from 'react';
// 예제는 App.js에서 바로 관리 / 나는 auth.js에 
import Auth from '../Firebase/Auth';
// 파이어베이서 파일에서 import 해온 db
import {db} from '../Firebase/firebase';
// db에 접근해서 데이터를 꺼내게 도와줄 친구들
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { async } from '@firebase/util';

const Login = () => {

  //const navigate = useNavigate();
  // input으로 받을 새로운 사람의 이름과 나이
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  // changed를 true로 바꿔주면 되지않을까?
  const [changed, setChanged] = useState(false); 
  console.log(newName, newAge);

    // 이따 users 추가하고 삭제하는거 진행을 도와줄 state
  const [users, setUsers] = useState([]);
  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(db, "users");

    // 유니크 id를 만들기 위한 useId(); - react 18 기능, 이 훅을 이렇게 사용하는게 맞는지 확신없음
    const uniqueId = useId();
    //console.log(uniqueId);

     // 시작될때 한번만 실행 // 읽어오기 - R
  useEffect(()=>{
  	// 비동기로 데이터 받을준비
    const getUsers = async () => {
    // getDocs로 컬렉션안에 데이터 가져오기
    const data = await getDocs(usersCollectionRef);
    // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
    setUsers(data.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
    }
    // 함수실행
    getUsers();
     // 뭐든 동작할때마다 changed가 true값으로 변경 > 화면 구성 후 다시 false로 돌려줘야지 다시 써먹음
    setChanged(false)
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
    // 내가 업데이트 하고자 하는 key를 어떻게 업데이트할지 준비,, 중요한점이 db에는 문자열로 저장되어있다. 그래서 createUsers()함수안에서 age를 생성할때 숫자열로 형변환 해줘야한다
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
      <h1>Name: {value.name}</h1> 
      <h1>Age: {value.age}</h1> 
        {/* 증가버튼은 이 안에 있어야 각 다른 데이터마다 붙는다, users data를 map으로 돌기때문에, 그 안의 id랑 age를 넣어주면 된다.*/}
        {/* id를 넣어주는 이유는, 우리가 수정하고자 하는 데이터를 찾아야하기 때문에. */}
        <button onClick={()=>{updateUser(value.id, value.age)}}>Increase Age</button>
        <button onClick={()=>{deleteUser(value.id)}}>Delete User</button>
    </div>
    ))

return ( 
      <>
      <Auth />

      {/* onchange를 이용해서, 변하는 값을 state로 저장한다. */}
      <input type="text" placeholder='name...' onChange={(event)=> {setNewName(event.target.value)}}/>
      <input type="number" placeholder='age...' onChange={(event)=> {setNewAge(event.target.value)}}/>
      <button onClick={createUsers}>Create User</button>
        {showUsers}

      </>
      );
    }

export default Login;