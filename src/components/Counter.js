import { useMemo, useState } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => setCounterOne(counterOne + 1);

  const incrementTwo = () => setCounterTwo(counterTwo + 100000000000);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return counterOne % 2 === 0;
  }, [counterOne]);
  // use memo cache the result of the function and convert the function into return value
  return (
    <div>
      Counter
      <h2>counter One ${counterOne}</h2>
      <span>{isEven ? "even" : "odd"}</span>
      <button onClick={incrementOne}>counterOne</button>
      <br />
      <h2>counter One ${counterTwo}</h2>
      <button onClick={incrementTwo}>counterOne</button>
    </div>
  );
};

export default Counter;
