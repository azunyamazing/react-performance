## React Performance

### Debugger

```bash
npm i
npm start
```

### Dir

```txt
- src
  - demo1.tsx  // a bad example
  - demo2-memo.tsx
  - demo2-useMemo.tsx
  - demo3.tsx // a example
  - demo4.tsx
```

### Summary

```txt
* React 性能优化的本质是将*变与不变部分*进行分离来减少不必要组件的重新渲染
* 所谓变的部分即以下会进行更新
  * state
  * props
  * context
* 当需要维持组件不进行非必要的 rerender 时, 应该保持组件的 state / props / context 不变, 尤其是 props 应该维持同一个引用或者改为浅比较!
```