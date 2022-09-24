import React, { memo, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);

  console.log("App render!");

  return (
    <div>
      <h3>memo</h3>
      <input type="text" value={count} />
      <button onClick={() => setCount((c) => c + 1)}>click me</button>
      <ExpensiveComponent />
    </div>
  );
};

const ExpensiveComponent = memo(() => {
  console.log("ExpensiveComponent render!");

  return <div></div>;
});

ReactDOM.render(<App />, document.getElementById("demo3"));
