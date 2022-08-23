import './App.css';
import { useState } from 'react';

function App() {
  const [add, setAdd] = useState(0);
  const [number, setNumber] = useState()

  const increamentBy1 = () => {
    setAdd(add+1);
  };
  const decreamentBy1 = () => {
    setAdd(add-1);
  };
  
  
  return (
    <div className="App">
      <button type="submit" onClick={increamentBy1}>Increment by 1</button>
      <br/><br/>
      <button type="submit" onClick={decreamentBy1}>Decrement by 1</button>
      <br/><br/>
      <button onClick={()=>setAdd(add+number)}>Increment by</button>
      <input  onChange={(e)=>{
        setNumber(+e.target.value)
      }}/>
      <br/>
      <br/>
      <br/>
      <h1>Count: {add}</h1>
    </div>
  );
}

export default App;
