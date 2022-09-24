### What You Did

:neutral_face: 我们平常开发可能会写到下面这样式的代码

```jsx
// a input component and a button

const App = () => {
  const [count, setCount] = useState(0);

  console.log("App render!");

  return (
    <div>
      <input type="text" value={count} />
      <button onClick={() => setCount((c) => c + 1)}>click me</button>
      <ExpensiveComponent />
    </div>
  );
};

function ExpensiveComponent() {
  console.log("ExpensiveComponent render!");
  return <div></div>;
}

// click button will output:
// "App render!"
// "ExpensiveComponent render!"
```

:zap: 每当点击 button 时就会更新 `count`, `App` 组件就会进行 rerender, 但是 `ExpensiveConponent` 此时实际上是不变的, 但是由于父组件 state 的更新, 导致子组件也会 rerender！


>:shell: 补充关于为什么 `ExpensiveConponent`  没有状态更新, 也会进行 rerender:
>
>React Function Component 中对于 props 的比较默认是全等比较[^全等比较], 即比较前后两次 props 的对象引用是否为同一个引用得出当前组件 props 已经更新, 需要重新渲染！(这里也是性能优化方向之一！)

[^全等比较]: {} === {}

### You Can do

:sunny: 我们不想每次因为其他组件导致的 rerender 而导致一些计算昂贵的组件也跟着重新渲染, 于是我们需要进行优化！

:christmas_tree: [slot 优化](../how-about-slot/readme.md)

:ghost: [memo 优化](../about-memo-api/readme.md)