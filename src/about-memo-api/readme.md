### About Memo Api

:boat: 我们也可以通过 memo api 对之前用例 [What You Did](../what-you-did/readme.md) 进行优化

> memo api 包括 memo / useMemo / useCallback 等 api,
> 本质上就是保持不变部分的稳定性(保持组件状态不变)

### memo

```jsx
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

// click button will output:
// "App render!"
```

:sailboat: 使用 `memo` 将 `ExpensiveComponent` 包裹住后, `memo` 会在组件重新渲染时, 对 props 进行浅比较[^浅比较]而不是进行全等比较, 因此 `ExpensiveComponent` 组件接收到的仍是前一次的 props 引用, 不会进行 rerender


[^浅比较]: 不会使用 === 进行比较, 而是比较属性, 因此开销也相对全等比较来说更大


### useMemo

```jsx
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

// click button will output:
// "App render!"
```

:sailboat: 这里其实是 `useMemo` 比较 hack 的用法, 一般 `useMemo` 用来对比 Vue 的 `computed`, 也就是来缓存一些计算开销叫昂贵的值, 这里用来保存组件, 用法就和 `memo` 类似, 因此依赖数组为空, 因此 `ExpensiveComponent` 的返回值永远是同一个, 也不会进行 rerender

:airplane: 其他方式优化
:christmas_tree: [slot 优化](../how-about-slot/readme.md)