import React, { useState } from "react";

const UsingMemo = React.memo(function ExpensiveComponent({
  data,
}: {
  data: string;
}) {
  console.log("Rendering UsingMemo with data:", data);
  return <div>{data}</div>;
});

const NotUsingMemo = function ExpensiveComponent({ data }: { data: string }) {
  console.log("Rendering NotUsingMemo with data:", data);
  return <div>{data}</div>;
};

interface MyFormProps {
  value: number; // Adjust type to match your data
}

const MyForm: React.FC<MyFormProps> = ({ value }) => {
  const [selectedComponent, setSelectedComponent] = useState("UsingMemo");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponent(event.target.value);
  };

  const ComponentToRender =
    selectedComponent === "UsingMemo" ? UsingMemo : NotUsingMemo;

  return (
    <form>
      <h2>Open a new console in the web browser</h2>

      <select value={selectedComponent} onChange={handleChange}>
        <option value="UsingMemo">UsingMemo</option>
        <option value="NotUsingMemo">NotUsingMemo</option>
      </select>
      <ComponentToRender data={value.toString()} />
    </form>
  );
};

export { MyForm };
