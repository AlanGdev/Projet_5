import './Card.css'
import { Link } from 'react-router-dom'
function Card ({cover,title,id}){
    return(
        <Link to={`/logement/${id}`}>
            <div className='card'>
                <img src={cover} alt="" className='card__cover'/>
                <h2 className='card__title'>{title}</h2>
            </div>
        </Link>
    )
}
export default Card