import React, { createContext, Dispatch, memo, SetStateAction, useContext, useState } from "react";
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

const Button = memo(() => {
  const setCount = useContext(setCountCtx);

  console.log("button render");

  return <button onClick={() => setCount((c) => c + 1)}>click me</button>;
});

const Input = () => {
  const count = useContext(countCtx);

  console.log("input render");

  return <input type="text" value={count} />;
};

ReactDOM.render(<App />, document.getElementById("app"));

/**
 * 这里每次点击 btn 都只会打印 'input render'!!
 *
 * 为什么 Button 组件套上一层 memo 后, 不会进行 rerender ?!
 *
 * 因为使用了 memo 后, React 在重新遍历组件树时, 会对 props 进行浅比较, 而不是全等比较, 因此传递给 Button 的 props 仍是上一次的 {}!
 * 同时, Button 自身没有 state, context 也没有改变, 因此不会 rerender!
 */
