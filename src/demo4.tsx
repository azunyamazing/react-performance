import React, { useState } from "react";
import ReactDOM from "react-dom";

/** 性能优化的本质就是将变与不变的部分分离 **/

const App = () => {
  return (
    <div>
      <Input />
      <SomeStaticComponent />
    </div>
  );
};

const Input = () => {
  const [count, setCount] = useState<string | number>(0);

  return <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />;
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
 * App 组件中的 state(count) 只与 input 有关, 因此我们可以将 input 单独封装成一个组件 Input
 *
 * 每次输入 input 都只会触发 Input 组件 rerender, 而其他组件不会
 * 因为 App 没有 state 改变, 也没有 props 改变, 更没有 context 改变, 因此不会触发 rerender!
 * App 组件没有 rerender, 那么传入给 SomeStaticComponent 的 props 也不会改变, 所以也不会 rerender!
 *
 * 但是, 实际项目开发中可能更复杂, state 同时在父组件和部分子组件使用时, 这个时候就需要 children 插槽来进行分离不变的部分!
 */
