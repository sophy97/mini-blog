
import { Route, Routes } from 'react-router-dom';
//css관련 import
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Layout from './pages/Layouts';
// 전역 사용할 데이터컨텍스트 
import Home from './pages/Home';
import Login from './pages/Login';
import { DataProvider } from './Context/DataContext';
import MypageComp from './pages/MypageComp';
import GamesComp from './pages/GamesComp';
import Footer from './components/Footer';
import Header from './components/Header';
import Home2 from './pages/Home2';
import About from './pages/About';


function App() {

  return (
  <DataProvider>
  
    <div className="App">
    <Header />
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/'  element={<Home />} />
            <Route path='/emolog'  element={<Home2 />} />
            <Route path='/about'  element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/mypage' element={<MypageComp />} />
            <Route path='/games' element={<GamesComp />} />
          </Route>
      </Routes>
    <Footer />
    </div>
    </DataProvider>
  );
}

export default App;
