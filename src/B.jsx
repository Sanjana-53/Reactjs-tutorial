
import  { useContext } from "react";
import { userContext } from "./Contexts";

const B = () => {
  const data = useContext(userContext);

  return (
    <div>
      <h1>B Components</h1>
      <h1>This is our B component: {data}</h1>
    </div>
  );
};

export default B;
