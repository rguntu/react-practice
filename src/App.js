import React, {useState} from 'react'
import './form_grid.css'

function App() {
    const [data, setData] = useState({});

    const getData = (name,value) => {
        let odata = {[name]:value}
        console.log(odata)
        setData({...data,...odata})
    }
    const onSubmitt = (event) => {
        event.preventDefault()
        console.log('submitted: {{data}}')
        console.log({data})
    }
    return (
        <form onSubmit={(event) => onSubmitt(event)}>
            
        <div className='form-container'>
            <input className='input-field' type='text' name='name' placeholder='Name' onChange={(event) => getData(event.target.name,event.target.value)} />
            <input className='input-field' type='number' name='age' placeholder='Age'  onChange={(event) => getData(event.target.name,event.target.value)}/>
            <input className='input-field' type='text' name='hobbies' placeholder='Hobbies'  onChange={(event) => getData(event.target.name,event.target.value)}/>
            <input className='input-field' type='date' name='date' placeholder='Date'  onChange={(event) => getData(event.target.name,event.target.value)} />
            <button type='submit'> Submit</button>
        </div>
        </form>
    )
}

export default App
