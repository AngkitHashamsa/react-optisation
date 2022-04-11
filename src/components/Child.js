import { memo } from "react";

const Child = ({ person, onClick }) => {
  console.log("child render");
  return (
    <div>
      <h2>
        {person.name} {person.title}
      </h2>
      <button onClick={onClick}>hello</button>
    </div>
  );
};

export default memo(Child);
