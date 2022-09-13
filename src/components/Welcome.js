import React from "react"


export default function Welcome (props){
    
console.log(props)
    
    return(
    <div className ="welcome-section">
        
        <h1 className = "welcome-title">Quizzical</h1>
        <p>A Quiz Game! </p>
        <button onClick = {props.start} className = "start-btn">Start Quiz</button>
        
    </div>
    )
}