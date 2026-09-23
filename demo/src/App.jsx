// import Product from "./Product";

// const App = () => {
//   const a = 10;
//   let toggle = false;
//   let prodt;

//   if (toggle) {
//     prodt = (
//       <>
//         <Product name="HP" Price={30000} />
//         <Product name="Vivo" Price={60000} />
//         <Product name="Acer" Price={70000} />
//       </>
//     );
//   } else {
//     prodt = (
//       <>
//         <Product name="Mac" Price={90000} />
//         <Product name="iphone" Price={100000} />
//       </>
//     );
//   }

//   return (
//     <>
//       <h1>Hello World</h1>
//       <h1>Hello Sir</h1>
//       <h3>{a}</h3>

//       {prodt}
//     </>
//   );
// };

// export default App;



// with turnury operator
// import Product from "./Product";
import Card from "./Card";
const App = ()=>{
  const arr=[{
    title: "Chess Board",
    img : "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?cs=srgb&dl=light-businessman-desk-1040157.jpg&fm=jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Consequuntur incidunt quae accusantium nostrum ratione minima illum voluptas 
    ad reprehenderit at eligendi autem quidem, tempore pariatur sequi distinctio vel
     inventore fuga.`,
  },
  {
  title: "Chess",
    img : "https://png.pngtree.com/thumb_back/fw800/background/20240403/pngtree-ai-generated-black-and-golden-chess-king-business-leader-concept-image_15647149.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Consequuntur incidunt quae accusantium nostrum ratione minima illum voluptas 
    ad reprehenderit at eligendi autem quidem, tempore pariatur sequi distinctio vel
     inventore fuga.`,
  },
  {
  title: "Chess play",
    img : "https://cdn.pixabay.com/photo/2022/01/11/10/26/chess-6930293_1280.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Consequuntur incidunt quae accusantium nostrum ratione minima illum voluptas 
    ad reprehenderit at eligendi autem quidem, tempore pariatur sequi distinctio vel
     inventore fuga.`,
  }
];
  return(
    <>
    <div className="main flex gap-3 md:bg-pink-500 text-black lg:bg-yellow-300 lg:text-red-400">

    <Card title={arr[0].title} img = {arr[0].img} desc = {arr[0].desc}/>
    <Card title={arr[1].title} img = {arr[1].img} desc = {arr[1].desc}/>
    <Card title={arr[2].title} img = {arr[2].img} desc = {arr[2].desc}/>
    
    </div>

    </>
  )
}

// const App = () => {
//   const a = 10;
//   let toggle = false;

//   const prodt = toggle ? (
//     <>
//       <Product name="HP" Price={30000} />
//       <Product name="Vivo" Price={60000} />
//       <Product name="Acer" Price={70000} />
//     </>
//   ) : (
//     <>
//       <Product name="Mac" Price={90000} />
//       <Product name="iphone" Price={100000} />
//     </>
//   );

//   return (
//     <>
//       <h1>Hello World</h1>
//       <h1>Hello Sir</h1>
//       <h3>{a}</h3>

//       {prodt}
//     </>
//   );
// };

export default App;