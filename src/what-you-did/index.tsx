import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);

  console.log("App render!");

  return (
    <div>
      <h3>what you did</h3>
      <input type="text" value={count} />
      <button onClick={() => setCount((c) => c + 1)}>click me</button>
      <ExpensiveComponent />
    </div>
  );
};

function ExpensiveComponent() {
  console.log("ExpensiveComponent render!");
  return <div></div>;
}

ReactDOM.render(<App />, document.getElementById("demo1"));
