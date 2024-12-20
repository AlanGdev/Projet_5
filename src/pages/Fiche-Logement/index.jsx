import { Navigate, useParams } from "react-router-dom";
import logements from '../../logements.json'
import Carrousel from "../../components/Carrousel";
import Title from "../../components/Title";
import Host from '../../components/Host'
import Rate from '../../components/Rate'
import Tags from "../../components/Tags";
import Collapse from "../../components/Collapse";
import './Fiche-Logement.css'

function Logement(){
    const {id}=useParams()
    const logement=logements.find((item)=>item.id===id)
    if (!logement)  {
        return(<Navigate to='/Error'/>)}
    return(
        
        <div className="logement">
            <Carrousel pictures={logement.pictures}/>
            <section className="logement__section">
                <div>
                <Title title={logement.title} location={logement.location}/>
                <Tags tags={logement.tags}/>
                </div>
                <div className="rate-host">
                <Host host={logement.host}/>
                <Rate rating={logement.rating}/>
                </div>
            </section>
            <section className="logement__section logement__details">
            <Collapse className="logement__details__description" title='Description' content={logement.description}/>
            <Collapse className="logement__details__equipments" title='Équipements' content={logement.equipments}/>
            </section>
        </div>
)
}
export default Logement