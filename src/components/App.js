
import React from "react";
import './../styles/App.css';

const App = () => {
  let [count , setCount] = useState(0);

  const inc = () =>{
    setCount(count+1);
  }

  return (
    <div>
      <p>Button Clicked {count} times</p>
      <button onClick = {inc}>Click me</button>
    </div>
  )
}

export default App
