import { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => setCounterOne(counterOne + 1);

  const incrementTwo = () => setCounterTwo(counterTwo + 100000000000);

  // use memo cache the result of the function and convert the function into return value

  const handleClick = useCallback(() => console.log("hello"), []);

  const Person = {
    name: "angkit",
    title: "hashamsa",
  };

  const memoizPerson = useMemo(() => Person, []);

  return (
    <div>
      Counter
      <h2>counter One ${counterOne}</h2>
      <button onClick={incrementOne}>counterOne</button>
      <br />
      <h2>counter One ${counterTwo}</h2>
      <button onClick={incrementTwo}>counterOne</button>
      <Child person={memoizPerson} onClick={handleClick} />
    </div>
  );
};

export default Counter;
