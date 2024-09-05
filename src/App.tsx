import React from "react";
import { MyForm } from "./MyForm";

function Function_components() {
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState(0);

  // Function to clear console and reset state
  const handleReset = () => {
    console.clear(); // Clear the console
    setCount(0); // Reset count
    setData(0); // Reset data
  };

  return (
    <>
      <MyForm value={data} />

      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      <button onClick={() => setData(data + 1)}>Change Data: {data}</button>
      <button onClick={handleReset}>Reset Everything</button>
    </>
  );
}

export { Function_components };
