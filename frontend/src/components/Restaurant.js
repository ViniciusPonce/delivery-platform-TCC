import React from "react";
import Button from "react-bootstrap/Button";

const Restaurant = () => {
  return (
    <>
        <Button 
          variant="light" 
          style={{boxShadow: "none", color: "#6B6B6B"}}
          onClick={() => console.log("Aqui é o Restaurante")}
          >
            Restaurante    
        </Button>

    </>
  )
}

export default Restaurant