import { memo } from "react";

const Tittle = () => {
  console.log("Title");
  return (
    <div>
      <h2>ParentComponent</h2>
    </div>
  );
};

export default memo(Tittle);
