import react, {useState} from 'react';
import './Counter.scss';

const Counter = () =>{
  const [counter,setCounter] = useState(0);

  const handleIncrement = () =>{
    setCounter(counter + 1);
  }

  const handleDecrement = () =>{
    if(counter === 0){
      setCounter(0)
    }else {
      setCounter(counter - 1);
    }
  }

  return (<div className = "counter">
    <h4>Counter</h4>
    <h4>{counter}</h4>
    <div className="counter__button">
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  </div>
  )}

export default Counter;