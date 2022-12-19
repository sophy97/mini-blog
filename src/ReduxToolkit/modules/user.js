// reduxjs/toolkit의 createSlice를 이용하여
// 간단하게 < reducer함수와 액션함수 > 를 만들 수 있다
import { createSlice } from "@reduxjs/toolkit";

// 초기값
const initialState = {
    userid : 1,
    username : "sophy",
    gender: "f",
    age : 26,
}

// 리듀서함수 작성 >> 객체로 값을 전달할 것
const userSlice = createSlice({
    name : "book",
    initialState : initialState,
    reducers : {
        setAge : (state, action)=>{
            state.age = action.payload },
    }
})


// 사용할 '액션함수' 내보내기 <- bookSlice에서 가져온다
export const { setAge } = userSlice.actions;
// 사용할 리듀서 내보내기 (default)
export default userSlice.reducer;