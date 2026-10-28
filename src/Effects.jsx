
import { useEffect, useState } from "react";

function Effects() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(21);

  useEffect(() => {
    console.log("Effect Happens");
  }, [count]);

  return (
    <div>
      <h1>This is Effects Component</h1>

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(Math.max(0, count - 1))}>-</button>

      <hr />

      <h2>Age: {age}</h2>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
      <button onClick={() => setAge(age - 1)}>Decrease Age</button>
    </div>
  );
}

export default Effects;
