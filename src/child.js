import React from 'react'

function Child({name,func}) {
    return (
        <div>Child: {name}
        <button onClick={() => {
    func('child')
        }} >ChildChange</button>
        </div>
        
    )
}

export default Child
