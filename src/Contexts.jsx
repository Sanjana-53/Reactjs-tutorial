
import { createContext, useState } from "react";
import A from "./A";
import B from "./B";

export const userContext = createContext();

const Contexts = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is Contexts Component</h1>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <h2>Parent Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>

      <userContext.Provider value={count}>
        <A />
        <B />
      </userContext.Provider>
    </>
  );
};

export default Contexts;
