import './Counter.css'

function Counter({ count, onClick, onClick2 }) {
 
  return (
   <><div className="counter">
      <div>
        <div className="count">
          <span className="count-holder">{count}</span>
        </div>
      </div>
    </div>
    <div>
        <button onClick={onClick}>+</button>
        <button onClick={onClick2}>-</button>
      </div></>
  )
}

export default Counter;
