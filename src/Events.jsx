import "./events.css"
const Events = ()=>{
    let count =0
    let inp="e"
    const handleInc=()=>{
        count++
        console.log(count)
    }
    const handleDec=()=>{
        count--
        console.log(count)
    } 

    const handleChange =(e)=>{
        console.log(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Submitted")
    }
    
    return(
        <div>Events Components
        <h1 onClick={handleInc}>+</h1>
        {count}
        <h1 onClick={handleDec}>-</h1>

        <form onSubmit={handleSubmit}>    
        <input onChange={handleChange} className="input"/>
        <button>submit</button>
        </form>
        {inp}
    </div>
    )
}
export default Events

