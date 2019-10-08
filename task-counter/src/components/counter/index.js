import React, { useState } from "react"


function Counter() {

    const [count, setCount] = useState(0)



    return(
        <div>
            <h2>YOU HAVE DONE {count} TICKETS TODAY</h2>
            <button onClick={() => setCount(count + 1)}>+ ADD</button>
            <button onClick={() => setCount(count - 1)}>- SUBTRACT</button>
        </div>
    )
}

export default Counter