// import { useCallback, useMemo, useState } from "react";
import { useUserContext } from "context/UserContext";
import Child from "./Child";
import { MemoizChildA } from "./ChildOption";
const Counter = () => {
  const {
    counterOne,
    counterTwo,
    incrementOne,
    incrementTwo,
    memoizPerson,
    handleClick,
  } = useUserContext();

  // use memo cache the result of the function and convert the function into return value

  return (
    <div>
      Counter
      <h2>counter One ${counterOne}</h2>
      <button onClick={incrementOne}>counterOne</button>
      <br />
      <h2>counter One ${counterTwo}</h2>
      <button onClick={incrementTwo}>counterOne</button>
      <Child person={memoizPerson} onClick={handleClick} />
      <MemoizChildA />
    </div>
  );
};

export default Counter;
