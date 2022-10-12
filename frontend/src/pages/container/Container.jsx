import React from 'react'
import Navbar from '../../components/navigationBar/Navbar.jsx'


const Container = ({children}) => {
    return (
        <main className='app-container'>
            <Navbar/>
            {children}
        </main>
    )
}

export default Container