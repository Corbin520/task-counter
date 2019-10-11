import React, { useState } from "react"


function Counter() {

    const [count, setCount] = useState(0)


    // function that will get the value from our input

    // event.target.value
    const [title, setTitle] = useState("")
    
    return(
        <div>
            <div className="input">
                <h2>Welcome {title}</h2>
                <input type="text" placeholder="Enter your name" onChange={event => setTitle(event.target.value)} />
            </div>

            <div className="count-buttons">
                <h2>YOU HAVE DONE {count} TICKETS TODAY</h2>
                <button id="add-button" onClick={() => setCount(count + 1)}>+ ADD</button>
                <button onClick={() => setCount(count - 1)}>- SUBTRACT</button>
                <br></br>
                <button onClick={() => setCount(0)}>RESET</button> 
            </div>
        </div>
    )
}

export default Counter