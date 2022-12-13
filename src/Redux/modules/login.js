
const initialState = {
    userid:"",
    email:"", 
    password, newName, newAge
    };


    function login (state=initialState, action) {
        // 사용할 액션을 action.type에 따라 switch문으로 작성
    switch (action.type) {
        case "setTitle" :
            return {...state, postTitle:action.payload }
        default :
            return state;
    }
    }
    
    