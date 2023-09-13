import React, { useState } from 'react';

const Button = () => {
  const [isYes, setIsYes] = useState(true)
  return(
    <div style={{display: "flex", justifyContent: "center", margin: "100px", flexDirection: "column"}}>
      <div style={{display: "flex", justifyContent: "center"}}>{isYes ? 'Yes' : 'No'}</div>
      <div style={{display: "flex", justifyContent: "center"}}><button onClick={() => {isYes ? setIsYes(false): setIsYes(true)}}>ClickMe</button></div>
    </div>
  )
}

export default Button;