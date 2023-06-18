import React, { useState } from 'react'

function App() {
    const [inputs,setInputs] = useState({})
    const blah = (dataa) => {
        const {name,value} = dataa.target
        const input = {[name]:value}
        setInputs({...inputs, ...input})
    }
    console.log("logs:",inputs)
    return (
        <div>
           <input placeholder="Name" name="name" onChange={blah}/>
           <input placeholder="Age" name="age" onChange={blah}/>
        </div>
    )
}

export default App
