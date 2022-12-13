// user 데이터

// 1 초기값 생성
const initialState = {
    userid : 1,
    username: "",
    usermail: "",
    userage: "",
    userphoto: "",
}

// 2 리듀서 작성
function user (state=initialState, action) {
    // 사용할 액션을 action.type에 따라 switch문으로 작성
    switch (action.type) {
        case "Login" :
            return {...state, ...(action.payload)}
        default :
            return state;
    }
}

export default user;
