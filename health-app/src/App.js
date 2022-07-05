
import React from 'react';
import './App.css';
import Diabetes from  './components/Diabetes/Diabetes';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Nav'
import Home from './components/Home/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login/Login'
import {BrowserRouter as Router, Switch,Route, Routes}from 'react-router-dom';



export default function App() {
  return (
    <Router>
      
      <div className="App">
        <Nav/>
        <Routes>
          <Route path = "/home" element={<Home/>}/>
          <Route exact path = "/diabetes" element={<Diabetes/>}/>
          <Route exact path = "/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </div>
   
    </Router>
    
  );
}
