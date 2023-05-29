import React, { useState } from 'react'
import Child from './child'

function App() {
    const [name, setName] = useState("ABC")
    const changeFunc = (cname) => {
        setName(cname)
    }
    return (
        <div>
            <h1>{name}</h1>
            <Child name={name} func={changeFunc} />
            <button onClick={()=>changeFunc("app")}>Action</button>
        </div>
    )
}

export default App
