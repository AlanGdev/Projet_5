import logements from '../../logements.json'
import Card from '../Card'
import './gallery.css'
function Gallery(){
    return(
        <ul className='gallery'>
            {logements.map((logement)=>(
            <li key={logement.id} className='gallery__item'>
                <Card cover={logement.cover} title={logement.title} id={logement.id}/>
            </li>
            )
            )}
        </ul> 
    )
}
export default Gallery