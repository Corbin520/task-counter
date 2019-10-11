import React, { useState } from "react"


function Counter() {

    // count hook
    const [count, setCount] = useState(0)

    // name hook
    const [title, setTitle] = useState("")

    // Date
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    
    return(
        <div>
            <div className="input">
                <h2>Welcome {title}</h2>
                <input type="text" placeholder="Name" onChange={event => setTitle(event.target.value)} />
            </div>

            <div className="count-buttons">
                <h3>Todays Date is: {month } / {date} / {year}</h3>
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