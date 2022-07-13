import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header/Header'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'

export default function Routing() {
  return (
    <div>
        <Router>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="cart" element={<Cart />}/>
                <Route path='Signup' element={<SignUp />}/>
                <Route path='LogIn' element={<LogIn/>}/>
            </Routes>
        </Router>
    </div>
  )
}
