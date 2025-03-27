import { useState } from 'react'
import './App.css'
import Counter from './Counter';

function App() {
  const[count, setCount] = useState(0)

  function onClick(){
    setCount(prev => prev + 1)
  }

  function onClick2(){
    setCount(prev => prev - 1)
  }
  return (
    <>
    <div className="App">
      <Counter count={count} onClick={onClick} onClick2={onClick2} />
    </div>
    </>
  );
}

export default App;
