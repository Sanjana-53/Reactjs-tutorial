// import "./Card.css"
const Card = ({title, img, desc}) => { //props concept
    let marks = 45;
    let result = marks>40?"Passed":"Fail"
    
    return (
        <>
            <div className="container bg-green-900 rounded-xl">
                <h2>Card Components</h2>
                <div className="card flex flex-col">
                    <div>
                        <img className="img" src= {img} alt="Image-components" />
                    </div>
                    <div>
                        <div className="title"> {title} </div>
                        <div className="desc"> {desc} </div>
                    </div>
                    <button className="btn">Click Me</button>
                </div>
                <div className={marks>40 ? "text-green-600":"text-red-800"}>{result} </div>
                
            </div>
        </>
    )
}
export default Card;