import React from 'react';
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Search from './pages/Search';

function App() {



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Profile' element={<Profile />}/>
          <Route path='/Search' element={<Search />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
