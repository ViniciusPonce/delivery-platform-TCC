import React from "react";
import Button from "react-bootstrap/Button";

const Convenience = () => {
    return (
        <>
            <Button 
            variant="light" 
            style={{boxShadow: "none", color: "#6B6B6B"}}
            onClick={() => console.log("Aqui é a Conveniência")}
            >
                Conveniência 
            </Button>
        </>
    )
}

export default Convenience