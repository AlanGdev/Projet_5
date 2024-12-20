import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import './Rate.css'

function Rate({rating}){
    const stars=[1,2,3,4,5]
    return(
        <ul className="rating">
            {stars.map((star)=>
            (star>Number(rating))?<li key={star} className="rating__star rating__star--not-colored"><FontAwesomeIcon icon={faStar} /></li>:<li key={star} className="rating__star rating__star--colored"><FontAwesomeIcon icon={faStar} /></li>)}
        </ul>
    )
}
export default Rate