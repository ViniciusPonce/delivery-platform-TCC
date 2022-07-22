import React from 'react';
import { Button } from "@mui/material"
import '../styles/ButtonText.css'

const Marketplace = () => {
    return (
        <>
            <Button 
                className= 'button'
                variant = 'Text' 
                style={{color: '#6B6B6B'}}
                onClick={() => {console.log('Aqui é o Mercado')}}>
                Mercado
            </Button>
        </>
    )
}

export default Marketplace
