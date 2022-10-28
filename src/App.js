
import { Route, Routes } from 'react-router-dom';
//css관련 import
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import GusetComp from './pages/GuestComp';
import Home from './pages/Home';
import Layout from './pages/Layouts';
import PostList from './pages/PostList';
import WriteComp from './pages/WriteComp';




function App() {

  return (
    <div className="App">
      
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}>
            <Route path=':id' element={<PostList />} />
          </Route>
          <Route path='write' element={<WriteComp />} />
          <Route path='guest' element={<GusetComp />} />
        </Route>

      </Routes>

        <div className="footer">
          <h3> <span style={{color:'yellow'}}>고정|</span>푸터</h3>
        </div>
    </div>
  );
}

export default App;
