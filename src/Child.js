import React from "react";

function Child({ onChangeColor }) {
  return (
    <div 
      className="child" 
      style={{ backgroundColor: "#FFF" }}
      onClick={onChangeColor}
    />
  );
}

export default Child;
