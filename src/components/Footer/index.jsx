import logo from '../../assets/images/LOGOF.png'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons'; 


function Footer(){
    return(
        <footer className='footer'>
            <img src={logo} alt="" className='footer__logo'/>
            <p className='footer__text'>
                <FontAwesomeIcon icon={faCopyright} />&nbsp; 2020 Kasa. All rights reserved
            </p>
            

        </footer>
    )
}
export default Footer