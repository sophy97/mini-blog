/**
 * modules 속 index.js
 * ! 역할
 * 리덕스에서 사용하기 위해 작성한 js파일들(모듈폴더 속 js들)을 묶어서 사용하도록
 * store에 여러 데이터가 들어가므로, 많아진 데이터들을 따로 관리하기 위함
 */
import { combineReducers } from "redux";
// 1 작성한 리덕스 모듈 가져오기
import post from './post';
import user from './user';

// 2 작성한 리덕스를 {객체, 객체}로 묶어 내보냄
const rootReducer = combineReducers({ post, user });
export default rootReducer;

