import { useState } from "react"
import './Carrousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'; 
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'; 


function Carrousel({pictures}){
    const[index,newIndex]=useState(0)
    const picturesLength=pictures.length
    return(
        <div className="carrousel">
            <button className='carrousel__arrowBack' onClick={()=>
            (index===0)?newIndex(picturesLength-1):newIndex(index-1)}> <FontAwesomeIcon icon={faChevronLeft} /> </button>
            <img className="carrousel__background" src={pictures[index]}/>
            <button className="carrousel__arrowForward" onClick={()=>(index===picturesLength-1)?newIndex(0):newIndex(index+1)}><FontAwesomeIcon icon={faChevronRight} /></button>
            <p className="carrousel__counter">{`${index+1}/${picturesLength}`}</p>

        </div>
)
}
export default Carrousel