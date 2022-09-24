import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  console.log("App render!");

  return (
    <div>
      <h3>how about slot</h3>
      <Count />
      <ExpensiveComponent />
    </div>
  );
};

function Count() {
  const [count, setCount] = useState(0);

  console.log("Count render!");

  return (
    <>
      <input type="text" value={count} />
      <button onClick={() => setCount((c) => c + 1)}>click me</button>
    </>
  );
}

function ExpensiveComponent() {
  console.log("ExpensiveComponent render!");
  return <div></div>;
}

ReactDOM.render(<App />, document.getElementById("demo2"));
