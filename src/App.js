import React, { useState } from "react";
import Input from "./Input";

const App = () => {
  const [count, setCount] = useState(null);
  const [count2, setCount2] = useState(null);

  const handleaddNumber = (e) => {
    setCount(e.target.value);
  };
  const handleaddNumber2 = (e) => {
    setCount2(e.target.value);
  };
  return (
    <div className="App">
      <h2>add numbers</h2>
      <input
        onChange={(e) => handleaddNumber(e)}
        value={count ? count : ""}
        type="number"
      />
      <input
        onChange={(e) => handleaddNumber2(e)}
        value={count2 ? count2 : ""}
        type="number"
      />
      <Input values={count ? count : ""} values2={count2 ? count2 : ""} />
    </div>
  );
};

export default App;
