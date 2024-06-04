import React from 'react';
import { Routes,Route } from 'react-router-dom';
import {Navbar} from './components/navbar';
import {Home,About,  Flowers} from './components/pages';
import {Auth} from './components/auth';
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/flowers" element={<Flowers/>}/>
        {/* <Route path="login" element={<Login/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
