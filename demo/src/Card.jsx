import "./card.css"
const Card = () => {
    return (
        <>
            <div className="container">
                <h1>Card Components</h1>
                <div className="card">
                    <div>
                        <img className="img"
                        src="https://static.vecteezy.com/system/resources/thumbnails/060/005/109/small/dramatic-chess-match-scene-intense-closeup-dark-background-copyspace-cinematic-atmosphere-free-photo.jpeg" 
                        alt="Image-components" />
                    </div>
                    <div>
                        <div className="title">Chess Board</div>
                        <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                    <button className="btn">Click Me</button>
                </div>
            </div>
        </>
    )
}
export default Card;