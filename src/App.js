import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Testhome from './screens/Testhome';
import Faq from './screens/Faq'
import Reviews from './screens/Reviews'
import ContactUs from './screens/ContactUs';
import LogIn from './screens/LogIn';
import LoginTwo from './screens/LoginTwo';
import GetStarted from './screens/GetStarted';
import About from './screens/About';
import Dashboard from './screens/Dashboard';

// import Testhome from  './screens/Testhome';


function App() {
 
  return (
    <Routes>
   
    <Route path='/' element={<Testhome />}/>
    <Route path='/Faq' element={<Faq/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Reviews' element={<Reviews/>} />
    <Route path='/ContactUs' element={<ContactUs/>} />
    <Route path='/LogIn' element={<LogIn/>} />
    <Route path='/LoginTwo' element={<LoginTwo/>} />
    <Route path='/GetStarted' element={<GetStarted/>} />
    <Route path='/Dashboard' element={<Dashboard/>} />
    {/* <Route path='/Testhome' element={<Testhome/>} /> */}
  </Routes>
  );
}

export default App;
  
    
    
    
