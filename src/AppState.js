import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  //let count = 0;
  const increment = () => {
    setCount(count+1)
    console.log(count)
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      
      <button onClick={()=>increment()}>Incr</button>
    </div>
  );
}

export default App;
