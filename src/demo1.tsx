import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import ReactDOM from "react-dom";

const countCtx = createContext<number>(0);
const setCountCtx = createContext<Dispatch<SetStateAction<number>>>(() => {});

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <countCtx.Provider value={count}>
      <setCountCtx.Provider value={setCount}>
        <Button />
        <Input />
      </setCountCtx.Provider>
    </countCtx.Provider>
  );
};

const Button = () => {
  // setCount 不会改变 永远是同一个引用值
  const setCount = useContext(setCountCtx);

  console.log("button render");

  return <button onClick={() => setCount((c) => c + 1)}>click me</button>;
};

const Input = () => {
  const count = useContext(countCtx);

  console.log("input render");

  return <input type="text" value={count} />;
};

ReactDOM.render(<App />, document.getElementById("app"));

/**
 * 这里每次点击 btn 都会打印 'button render' 和 'input render'!!
 *
 * App 组件中, count 作为 state 更新了, App rerender √
 * Input 组件中, count 作为 context 更新了, Input rerender √
 *
 * 但是 Button 组件中, 没有 state && context 没有改变, 为何 rerender ?!
 *
 * 实际上 Button 中 props 改变了!
 * 看起来 Button 没有 props, 实际上 props 为 {}！
 * 因为 App 组件更新后, Button 获取到的又是一个 {}, React 默认会对前后 props 进行全等比较, 即 {} !== {} !!
 *
 * 因此, 如果想避免 Button 这种组件进行 rerender, 可以使用 React 提供的性能优化 api, eg: memo / useMemo / useCallback ...
 */
