import { useContext } from "react";
import { userContext } from "./Contexts";

const A = () => {
  const data = useContext(userContext);

  return (
    <div>
      <h1>A component</h1>
      <h1>This is our A component: {data.Count}</h1>
    </div>
  );
};

export default A;