import React, {useState} from "react";
import useToggle from "./hooks/useToggle";


function Toggler() {
    const[isHappy, toggleIsHappy] = useToggle(false)
   
    return(
        <h1 on onClick={toggleIsHappy}>{isHappy ? "🥰" : "😢"} </h1>
    )
}
export default Toggler