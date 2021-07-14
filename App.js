import React from "react"
import "./style.css"
import Button from "./Button"

const App=()=>{
    return(
        <div>
            <h1 style={{ textAlign : "center"}}> Hello world </h1>
            <h2> Hi Everyone !!</h2> 
            <Button buttonText="Name"/>
            <Button buttonText="Email"/>
            <Button buttonText="Phone"/>
            <h2> Here you can enter your details</h2> 
       </div>
       
    )
}

export default App