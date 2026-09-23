import "./events.css"
const Events = ()=>{
    let count =0
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
    </div>
    )
}
export default Events