import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Router
import  { BrowserRouter } from "react-router-dom";

// 1 > React에서 리덕스를 사용하기 위한 프로바이더 가져오기
// Redux provider & store (toolkit사용)
import { Provider } from "react-redux";
// 기존 리덕스 사용 시 createStore로 store생성했던 반면,
// 2 > 리덕스 툴킷 사용 -> js파일에서 store를 내보내고 그것을 가져와 사용
// *store.js 작성 후 추가 
// (configureStore의 기능을 통해 자동으로 store라는 이름으로 등록됨)
import store from "../ReduxToolkit/modules/store.js";
// *참고! 리덕스 사용 규칙 : store는 프로젝트 당 하나만 둘 수 있다

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL} >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
