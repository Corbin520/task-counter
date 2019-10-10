import React, { useState } from "react"


function Counter() {

    const [count, setCount] = useState(0)

    const [name, setName] = useState("")



    return(
        <div>
            <div className="input">
                <h2>Welcome  {name} !</h2>
                <input type="text" placeholder="Enter your name" onChange={() => setName(name)}></input>
                <button type="submit" onClick>Submit</button>
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