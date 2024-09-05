import React, { useState } from "react";

// Component using React.memo
const UsingMemo = React.memo(function ExpensiveComponent({
  data,
}: {
  data: string;
}) {
  console.log("Rendering Using Memo");
  return <div>{data}</div>;
});

// Component not using React.memo
const NotUsingMemo = function ExpensiveComponent({ data }: { data: string }) {
  console.log("Rendering Not Using Memo");

  return <div>{data}</div>;
};

interface MyFormProps {
  value: number;
}

const MyForm: React.FC<MyFormProps> = ({ value }) => {
  const [selectedComponent, setSelectedComponent] = useState("UsingMemo");
  const data = `Expensive Data: ${value}`;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponent(event.target.value);
  };

  // Select component to render based on state
  const ComponentToRender =
    selectedComponent === "UsingMemo" ? UsingMemo : NotUsingMemo;

  return (
    <form>
      <h2>Open a new console in the web browser</h2>

      <select value={selectedComponent} onChange={handleChange}>
        <option value="UsingMemo">Using Memo</option>
        <option value="NotUsingMemo">Not Using Memo</option>
      </select>
      <ComponentToRender data={data} />
    </form>
  );
};

export { MyForm };
