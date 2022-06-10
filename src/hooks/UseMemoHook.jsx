import { useState, useMemo } from "react";

function UseMemoHook() {
  const [count, setCount] = useState({
    id: 1,
    num: 1,
  });

  const [show, setShow] = useState(false);

  const handleChange = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return count.num * 2;
  }, [count]);

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
      {show && <span>{count.id}</span>}
      <button onClick={handleAdd}>+</button>

      <div>
        <p>{handleChange}</p>
        <button onClick={() => setShow((prev) => !prev)}>change</button>
      </div>
    </div>
  );
}

export default UseMemoHook;
