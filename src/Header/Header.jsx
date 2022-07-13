import React from 'react'
import { NavLink } from 'react-router-dom'
import { CartState } from "../Contextapi";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../Assets/style.css'
import icon from '../Assets/Images/bag.png'

export default function Header() {
    const { cart } = CartState();
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <a className="navbar-brand navli" >
                <img src={icon} alt="" width="40" height="32" className="d-inline-block align-text-top"/>
                    Shopping.com
                </a>


                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">

                <NavLink className="navbar-brand navli " to="SignUP">SignUp</NavLink>
                <NavLink className="navbar-brand navli " to="LogIn">Login</NavLink>
                    

                    <li className="nav-item">
                    <button type="button" class="btn btn-warning">
                        <NavLink className="nav-link navlii" aria-current="page" to="/">Home</NavLink>
                    </button>
                    </li>
                    <li className="nav-item">
                    <button type="button" class="btn btn-warning">
                        <NavLink className="nav-link navlii" to="cart">Cart ({cart.length})</NavLink>
                    </button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
