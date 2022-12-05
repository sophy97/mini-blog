// Context 관련 내용은 공식 홈페이지 고급안내서 참조
// Context를 사용해서, value값도 이 파일에서 지정 후 내보내기
import { createContext, useState } from "react";


const DataContext = createContext();
/* Context 객체 안에는 원래 Provider라는 컴포넌트가 들어있다!
Provider에서는 value값을 통해 컴포넌트 간에 공유하고자 하는 값을
value 라는 Props로 설정해서 자식 컴포넌트들에서 바로(전역)접근 가능
*/  
// 지금은, DataProvider를 여기서 작성해서 value값을 이미 가진 컴포넌트를
// 내보내는 방식. 컴포넌트니까 함수형컴포넌트(형식)으로 작성
const DataProvider = ({children})=> {
    // children으로 사용할 값들을 useState hook 통해 들고온다
    // 1 유저 정보
    //로그인해서 계속 사용되어야 할 유저정보
    const [user, setUser] = useState( { name:"sophy", profile:null });

    // 로그인 로그아웃 함수
    const [login, setLogin] = useState(true);

    // 2 해당 유저 포스트를 출력

    // 3 홈2에서 입력받을값 
    
    // 사용할 value값들을 state(초기값)과 action(변경값) 분리해 넣어둔다
    const value = 
    {
        state: {user, login},
        action: {setUser, setLogin}
    };

    
    // DataProvider를 사용할 때, DataContext.Provider를 불러 사용하게끔
    // 이때, {children}은 Provider데이터를 공용으로 쓰는 컴포넌트들
    
    return (
    <DataContext.Provider value={value}>
    {children} 
    </DataContext.Provider>
    );

};


// // consumer 작성
// // DataContext 의 값을 가져와, DataConsumer로 사용하겠다
const { Consumer : DataConsumer } = DataContext;

// // 컴포넌트로 사용하기 위해 export > .Provider대신 사용할 컴포넌트임
// // 원래 Provider는 App 전체를 감싸서 사용했음
export { DataProvider, DataConsumer }

// 값을 사용하기 위해 가져오는 컨텍스트를 export
export default DataContext;
