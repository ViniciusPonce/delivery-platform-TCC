import React from "react";
import Button from "react-bootstrap/Button";

const Marketplace = () => {
    return (
        <>
        <Button 
          variant="light" 
          style={{boxShadow: "none", color: "#6B6B6B"}}
          onClick={() => console.log("Aqui é o Supermercado")}
          >
            Mercado    
        </Button>
        </>
    )
}

export default Marketplace
