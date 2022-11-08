
import { Route, Routes } from 'react-router-dom';
//css관련 import
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import GuestComp from './pages/GuestComp';
import Layout from './pages/Layouts';
import WriteComp from './pages/WriteComp';
// 전역 사용할 데이터컨텍스트 
import Home from './pages/Home';
import Login from './pages/Login';
import PostDetail from './components/PostDetail';
import { DataProvider } from './Context/DataContext';
import MypageComp from './pages/MypageComp';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {

  return (
  <DataProvider>

    <div className="App">
    <Header />
      <Routes>
          <Route path='/' element={<Layout />}>

            <Route path='/'  element={<Home />}> 
              <Route path='/:id' element={<PostDetail />} />
            </Route>
            <Route path='login' element={<Login />} />
            <Route path='mypage' element={<MypageComp />} />
            <Route path='write' element={<WriteComp />} />
            <Route path='guest' element={<GuestComp />} />

          </Route>
      </Routes>
    
    <Footer />
    </div>
    
    </DataProvider>
  );
}

export default App;
