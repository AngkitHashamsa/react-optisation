import React, { memo } from "react";
import { useUserContext } from "context/UserContext";
const ChildA = () => {
  console.log("childA");
  return (
    <div>
      ChildA
      <ChildB />
    </div>
  );
};

export const MemoizChildA = memo(ChildA);

const ChildB = () => {
  console.log("childB");
  return (
    <div>
      ChildB
      <ChildC />
    </div>
  );
};

const ChildC = () => {
  console.log("child C");
  const { counterOne } = useUserContext();
  return (
    <div>
      <h2>ChildC</h2>
      {counterOne}
    </div>
  );
};
