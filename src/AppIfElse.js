import React, { useEffect } from 'react'

function App() {
    const age = 21
    const name = "blah1"
    useEffect(()=> {
        const age = 33
        const name = "blah"
    })
    return (
        <div>
            {
            age > 25  ?
            <>
            <h1>You are old</h1>
            </>
            : age < 25 && name === 'blah' ?

            <>
            <h1>You are not old</h1>
            <h1>You are blah</h1>
            </>

            :

            <>
            <h1>You are OK</h1>
            </>

            }

        </div>
    )
}

export default App
