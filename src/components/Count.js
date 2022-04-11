import { memo } from "react";

const Count = ({ text, count }) => {
  console.log("Render ", text);
  return (
    <div>
      {text} - {count}
    </div>
  );
};

export default memo(Count);
