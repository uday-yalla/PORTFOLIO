import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
const App = () => {

const [theme,setTheme]=useState('light');

useEffect(()=>{
  if(theme==='dark'){
    document.documentElement.classList.add('dark');
  }
  else{
    document.documentElement.classList.remove('dark')
  }
},[theme])

const toggleTheme=()=>{
  setTheme(theme === 'light'?"dark":'light');
}
  return (
    <div className='bg-BgColor'>
  <Navbar toggleTheme={toggleTheme}/>
  <Routes>
   <Route path='/' element={<Home/>}/>
  </Routes>
    </div>
  )
}

export default App