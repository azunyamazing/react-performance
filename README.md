### React Performance

:innocent: 关于 React 组件层面的性能优化, 本质上就是尽可能减少组件的重复渲染

### Debug By Yourself

```bash
npm i
npm start
```

### React Performance

:doughnut: [What You Did](./src/what-you-did/readme.md)

:custard: [How About Slot](./src/how-about-slot/readme.md)

:bread: [About Memo Api](./src/about-memo-api/readme.md)

### Summary

:speedboat: React 组件层面性能优化本质上就是将更新频繁的组件和不变的组件进行分离, 将渲染开销控制在局部上, 而不影响更新频率较低的组件

:sailboat: React Function Component 会发生更新的部分, 也就是会触发 rerender 的原因
  1. state
  2. props
  3. context

:boat: 安抚好 React FC 三剑客的情绪, 请务必不要让他们如此善变, 不要将情绪传染给其他兄弟组件！
