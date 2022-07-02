import React, { useState } from "react";
import ReactDOM from "react-dom";

/** 性能优化的本质就是将变与不变的部分分离 **/

const App = () => {
  const [count, setCount] = useState<string | number>(0);

  return (
    <div>
      <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
      <SomeStaticComponent />
    </div>
  );
};

const SomeStaticComponent = () => {
  console.log("SomeStaticComponent render");

  return (
    <>
      <p>text one ...</p>
      <p>text two ...</p>
      <p>text three ...</p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

/**
 * 这里每次在 input 输入内容都会打印 'SomeStaticComponent render' !!
 *
 * 因为 App 组件 state 一直在改变, 不断 rerender, SomeStaticComponent props 前后全等比较为 false, 因此也会不断触发 rerender
 *
 * 当然, 也可以通过 memo 来包裹住 SomeStaticComponent 来进行浅比较 props 来防止 rerender
 * 但是, 实际上我们可以通过分离变与不变部分来进行性能优化!
 */
