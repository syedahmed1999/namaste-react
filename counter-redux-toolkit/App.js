import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import React from 'react'

export const App = () => {
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




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);