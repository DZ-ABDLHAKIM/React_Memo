# React Memo Example

This project demonstrates the use of `React.memo` to optimize the performance of React components. Specifically, it shows the difference between a component that uses `React.memo` and one that does not.

## Overview

In this example, we have two components:

1. **`UsingMemo`**: This component does **not** use `React.memo`. It will re-render every time its parent component re-renders, regardless of whether its props have changed.
2. **`NotUsingMemo`**: This component **does** use `React.memo`. It will only re-render if its props change, helping to prevent unnecessary re-renders and optimize performance.

## Components

### `UsingMemo`

This component is a simple React component that receives `data` as a prop and renders it:

```tsx
const UsingMemo = function ExpensiveComponent({ data }: { data: string }) {
  console.log("Rendering UsingMemo");
  return <div>{data}</div>;
};
```
# How to Test
1. Open the application in your browser.
2. Open the browser console.
3. Select between UsingMemo and NotUsingMemo using the dropdown menu.
4. Observe the console logs to see how often each component is rendered.
You will see that UsingMemo logs more frequently than NotUsingMemo, demonstrating the optimization provided by React.memo.

# Conclusion
Using React.memo can help improve the performance of React applications by preventing unnecessary re-renders.
This example illustrates how wrapping a component with React.memo can help achieve this optimization.

Feel free to explore and modify the code to further understand the impact of React.memo on component rendering.
