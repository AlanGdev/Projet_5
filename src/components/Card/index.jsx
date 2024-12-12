import './Card.css'
function Card ({cover,title}){
    return(
        <div className="card">
            <img src={cover} alt="" className='card__cover'/>
            <h2>{title}</h2>
        </div>
    )
}
export default Card