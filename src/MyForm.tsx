import React, { useState } from "react";

const Using_memo = function ExpensiveComponent({ data }) {
  console.log("Rendering Not_Using_memo");
    return <div>{data}</div>;
};

const Not_Using_memo = React.memo(function ExpensiveComponent({ data }) {
  console.log("Rendering Using_memo");
  return <div>{data}</div>;
});

const MyForm = function MyForm() {
  const [selectedComponent, setSelectedComponent] = useState("Using_memo");
  const data = "Expensive Data";

  const handleChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const ComponentToRender =
    selectedComponent === "Using_memo" ? Using_memo : Not_Using_memo;

  return (
    <form>
      <h2>open new console in web browser</h2>

      <select value={selectedComponent} onChange={handleChange}>
        <option value="Using_memo">Using_memo</option>
        <option value="Not_Using_memo">Not_Using_memo</option>
      </select>
      <ComponentToRender data={data} />
    </form>
  );
};

export { MyForm };
