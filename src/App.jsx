import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import './App.css'
import Assingment from './Components/Assingment'
import Landingpage from './Components/Landingpage'
import About from './Components/About'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage></Landingpage>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/assingment' element={<Assingment></Assingment>}></Route>
          <Route path='/about' element={<About></About>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


