import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'


import Home from './pages/home/Home.jsx'
import Register from './pages/login/Register.jsx'
import Login from './pages/login/Login.jsx'
import Static from './services/staticVar.js'

export default function MainRoutes() {

    const isLogged = () => {
        return localStorage.getItem('authorization') ? true : false;
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={isLogged() ? (<Navigate replace to="/"/>) : (<Login />)
        } />
        </Routes>
    )
}
