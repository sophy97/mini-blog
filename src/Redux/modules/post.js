// post 데이터

// 1 초기값 생성
// 원하는 변수값 다 넣을 수 있다 > 여러개값 사용하므로 보통 객체..
const initialState = {
    userid : 1,
    postTitle : "제목1",
    postContent : "메롱메롱메롱~",
}

// 2 리듀서함수(변경을 허용할 값) 작성 
// load: 기본값 그대로 뿌리고, create: 새로 받아온 값을 가지고 있던 값에 더해서 리턴
// 파라미터는 항상 state,action
function post (state=initialState, action) {
    // 사용할 액션을 action.type에 따라 switch문으로 작성
    switch (action.type) {
        case "setTitle" :
            return {...state, postTitle:action.payload }
        default :
            return state;
    }
}


// 3 액션함수 작성
export const changeTitle =(postTitle)=> ({type:"setTitle", payload:postTitle});

// 4 리듀서 내보내기 (js파일 이름과 동일하게)
export default post;