// Profile컴포넌트 (레이아웃페이지소속)
// 프로필 보여주는 박스 출력
// 프로필 박스에서 프로필수정 버튼클릭 > 수정할 수 있는 mypage 로 이동

import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../Context/DataContext';
import '../App.css';
import LoginCardComp from './LoginCardComp';
import Login from '../pages/Login';




const Profile = () => {
    // user데이터 불러와서 로그인정보와 연결
    const data = useContext(DataContext);
    
    const navigate = useNavigate();

    // 로그아웃을 위한 이벤트함수
    const logOut = () => {
    data.action.setLogin(false);  //로그아웃
    navigate("/");  //어디서 로그아웃하든 홈으로 이동
    alert("로그아웃 완료");
    data.action.setUser({name:null}); //user의 name 값도 null로    
    }

// 새로 로그인했을 때 화면 바뀌도록
    useEffect(()=>{
        data.action.setLogin( data.state.user.name ? true : false )
        }, [data.state.user.name])  
        

    return ( 
        <div>
                {/* 로그인.로그아웃 관리 */}
                {data.state.login ? (
                // 1 로그인 true상태
                <div>
                <LoginCardComp logOut={logOut} />
                </div>
                ) : (
                // 2 로그인 false상태
                <div>
                <LogoutComp navigate={navigate}/>
                </div>
                )}
                
        </div>
    );
}

export default Profile;



// 로그아웃 상태에서 보여줄 컴포넌트
// 바로 위에서 사용 > export 필요없음

const LogoutComp = (props) => {
    return ( 
        <div className='profile-out'>
            <br />
            <h5>로그인이 필요합니다!</h5> <br />
            <button onClick={()=>{props.navigate('/login')}}
            style={{padding:'2px', borderRadius:'6px'}} > 로그인하러 가기 </button>
        </div>
    );
}