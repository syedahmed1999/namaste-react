import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import React from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count)
  return (
    <div>
      <h1>Incremental Program</h1>
      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

    </div>
  )

}


export const App = () => {
  const array = [1, 2, 3, 4, 5];
  return <div>

    {
      array.map((x, i) => {
        return <Counter key={i} />
      })
    }
  </div>
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);