import React from "react";
import { MyForm } from "./MyForm";

function Function_components() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <MyForm />

      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
    </>
  );
}

export { Function_components };
