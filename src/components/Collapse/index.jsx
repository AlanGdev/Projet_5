import './Collapse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react';

function Collapse({title,content}){
    const[isOpen,SetIsOpen]=useState(false)
    return(
        <div className="collapse">
            <div className='collapse__banner'>
                <p className="collapse__banner__title">
                    {title}
                </p>
                <button className='collapse__banner__btn' onClick={()=>SetIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
            </div>
            {isOpen?
            (Array.isArray(content)?
            <ul className="collapse__content">{content.map((item)=>
            <li key={item}>{item}</li>)}
            </ul>:
            <p className="collapse__content">
                {content}
            </p>):''}
        </div>
    )
}
export default Collapse