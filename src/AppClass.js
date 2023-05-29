import React, {Component} from "react";
import Child from "./child";
class  App extends Component {
  constructor() {
    super()
    this.state = {
      name: "rave",
      age: 100,
      array: [1,2,3]
    }
  }
  changeSt = () => {
    this.setState({
      age: this.state.age * 2,
      name: 'fff'
    })
  }
  render() { 
    return (<div>
      <h1>{this.state.name}</h1>
      <h2>{this.state.age}</h2>
      <Child name={name}/>
<button onClick={()=>this.changeSt()}>chnage</button>
    </div>);
  }
}
 
export default App;