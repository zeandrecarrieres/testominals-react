import logo from '../logo.svg';


const Card = ({id, img, name, text})=> {
    
    return (
        <div>
            <div className="card-content" key={id}> 
                <img className="avatar" src={img} alt="" />
                <h2>{name}</h2>
                <p className="quote">{text}</p>
            </div>

        </div>
    )
}




export default Card
