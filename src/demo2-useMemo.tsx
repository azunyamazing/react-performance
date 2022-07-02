import React, { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from "react";
import ReactDOM from "react-dom";

const countCtx = createContext<number>(0);
const setCountCtx = createContext<Dispatch<SetStateAction<number>>>(() => {});

const App = () => {
  const [count, setCount] = useState(0);

  // dependencies 为 [], 返回值永远不变
  const memorizedButton = useMemo(() => {
    return <Button />;
  }, []);

  return (
    <countCtx.Provider value={count}>
      <setCountCtx.Provider value={setCount}>
        {memorizedButton}
        <Input />
      </setCountCtx.Provider>
    </countCtx.Provider>
  );
};

const Button = () => {
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
 * 这里每次点击 btn 都只会打印 'input render'!!
 *
 * 为什么用 useMemo 将 Button 组件缓存起来后, 不会进行 rerender ?!
 *
 * useMemo 一般用来缓存一些计算复杂的值, 这里其实是比较 hack 的用法, 依赖数组为空, 则返回的永远都是同一个 Button, 也就意味着 Button 的 props 永远都不会改变, 自然也不会 rerender!
 *
 *
 * 题外话:
 *  useMemo / useCallback 等这些 api 如果只是缓存一个 state 或者一个值传递给子组件, 以此来减少子组件 rerender 次数, 必须配合 memo 来使用
 *  因为 React 默认的全等比较不会对比两个对象的 key & value, 需要 memo 来转为浅比较来对比前后两次的 props!
 */
