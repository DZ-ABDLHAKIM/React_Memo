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
      <p>
        To ensure you can see the effects of clearing the console, please
        disable the "Preserve log" option in your browser's developer tools.
      </p>
      <p>
        To do this:
        <ul>
          <li>
            Open the Developer Tools (F12 or right-click and select "Inspect").
          </li>
          <li>Go to the "Console" tab.</li>
          <li>
            Uncheck the "Preserve log" option at the top of the Console tab.
          </li>
        </ul>
      </p>
    </>
  );
}

export { Function_components };
