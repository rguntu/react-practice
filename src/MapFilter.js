import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  const [nums, setNums] = useState([1,2,3,6,7,8,9,10,11,12])
  const getUsers = async () => {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await reponse.json()
    setUsers(users)
    console.log(users)
  }
  const mapMumData = () => {
    const fnums = nums.filter((num) => {
      return(num < 6)
    })
    .map((p) => {
      return p*3
    })
    setNums(fnums)
  }
  const mapData = () => {
    console.log("mapData called")
    const marr = users.map(u => (
      u.id*2
    ))
    console.log(marr)
    const fltr1 = users.filter(u => {
      //u.username === 'Bret' 
      return u.username.toLowerCase().includes('a')
    }
      )
      setUsers(fltr1)
    console.log(fltr1)
  }
  useEffect(() => {
    getUsers();
  }, [])
  return (
    <div className="App">
      <h1>Users</h1>
      <div className='usersl'>
        {users.map(u => (
          <div className='user'>
            <p> {u.name}</p>
            <p> {u.username}</p>
          </div>
        )

        )}
      </div>
          <button type='btn' onClick={()=>mapData()}>mapData</button>

          <button type='btn' onClick={()=>mapMumData()}>mapMumData</button>
            {
              nums.map(num => {
                return(  <div className='user'>
                  {num}
                  </div>
                  )
              })
            }
         
    </div>
  );
}

export default App;
