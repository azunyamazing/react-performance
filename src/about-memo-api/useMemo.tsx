import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);

  console.log("App render!");

  const ExpensiveComponent = useMemo(() => {
    console.log("ExpensiveComponent render!");
    return <div></div>;
  }, []);

  return (
    <div>
      <h3>useMemo</h3>
      <input type="text" value={count} />
      <button onClick={() => setCount((c) => c + 1)}>click me</button>
      {ExpensiveComponent}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("demo4"));
