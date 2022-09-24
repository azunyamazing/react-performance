### How About Slot

:memo: 我们可以通过 slot 方式对之前用例 [What You Did](../what-you-did/readme.md) 进行优化

> 本质上就是将状态频繁变更部分和不变的部分进行分离, 将渲染开销控制在部分组件内部

```jsx
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

// click button will output:
// "Count render!"
```

:rocket: 跟之前用例对比, 这次我们是将 `input` 和 `button` 相关代码和状态单独封装到组件 `Count` 中, 就是这样一个操作, 每次都只会更新 `Count` 组件！
* `App` 组件因为自身没有状态更新, 所以不会进行 rerender, 既然如此, `ExpensiveComponent` 接收的 props 也不会变, 也不会进行 rerender
* `Count` 中每次点击按钮更新状态后, 自身进行 rerender, 不会影响到父组件和兄弟组件

:airplane: 其他方式优化
:ghost: [memo 优化](../about-memo-api/readme.md)

