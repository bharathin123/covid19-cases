import { useState, useEffect } from "react";

function UseEffectHook() {
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

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    console.log("ran");

    // return () => {
    //   console.log("ran returned");
    //   window.removeEventListener("resize");
    // };
  }, [count]);
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={handleSubstract}>-</button>
      <span>{count.num}</span>
      <button onClick={handleAdd}>+</button>
      <h1>{screenWidth}</h1>
    </div>
  );
}

export default UseEffectHook;
