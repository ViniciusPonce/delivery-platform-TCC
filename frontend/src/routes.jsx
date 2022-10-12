import React from 'react'
import { Routes, Route } from 'react-router-dom'


import Home from './pages/home/Home.jsx'
import Register from './pages/login/Register.jsx'
import Login from './pages/login/Login.jsx'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
