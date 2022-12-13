import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Router
import  { BrowserRouter } from "react-router-dom";
// Redux provider & store
import { Provider } from 'react-redux';
import {  createStore } from 'redux';
import rootReducer from './Redux/modules/index';



// import한 createStore로 store생성 (src의 index.js)
// 리덕스 사용 규칙 : store는 프로젝트 당 하나만 둘 수 있다
const store = createStore(rootReducer);
export default store;


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
