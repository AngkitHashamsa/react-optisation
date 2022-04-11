import { useCallback, useState } from "react";
import Count from "./Count";
import Tittle from "./Tittle";
import Button from "./Button";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  const incrementAge = useCallback(() => setAge(age + 1), [age]);
  const incrementSalary = useCallback(() => setSalary(salary + 1000), [salary]);

  console.log("parent component");

  return (
    <>
      <Tittle />
      <Count text="Age" count={age} />
      <Button onClick={incrementAge}>increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button onClick={incrementSalary}>increment Salary</Button>
    </>
  );
};

export default ParentComponent;
