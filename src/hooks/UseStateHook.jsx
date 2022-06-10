import { useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState({
    id: 1,
    num: 1,
  });
  const handleAdd = () => {
    //setCount(count + 1);
    //setCount((prev) => prev + 10);
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };
  const handleSubstract = () => {
    //setCount(count - 1);
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={handleSubstract}>-</button>
      <span>{count.num}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}

export default UseStateHook;
