import useCounter from "./useCounter";

const Custom=()=>{
    const {count, increment,decrement}= useCounter();
    return(
        <div>
            <h1>This is Custom Component.</h1>
            <h2 onClick={increment}>Increment</h2>
            <h2>{count}</h2>
            <h2 onClick={decrement}>Decrement</h2>
        </div>
    )
}
export default Custom;