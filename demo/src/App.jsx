import Product from "./Product"
const App = ()=>{
  const a=10;
  let toggle = false;
  //let prodt;
  
  return (
  <>                
    <h1>Hello World </h1>
    <h2>Hi Everyone</h2>
    <h3>{a}</h3>
    <h1>Product page</h1>
    {
      toggle &&

    <>
    <Product name="HP" price={60}/>
    <Product name="Vivo" price={30}/>
    <Product name="Acer" price={50}/>
      </>
   ||
    <>
    <Product name="Lenovo" price={75}/>
    <Product name="Macbook" price={130}/>
    </>
   
}
  </>
  );
}//empty tag in react are called fragment
export default App

//UI
//1. Imperative   2. Declarative