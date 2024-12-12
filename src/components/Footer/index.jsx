import logo from '../../assets/images/LOGOF.png'
import './Footer.css'
function Footer(){
    return(
        <footer className='footer'>
            <img src={logo} alt="" className='footer__logo'/>
            <div className='footer__section'>
            <p>2020 Kasa.</p>
            <p>All rights reserved</p>
            </div>

        </footer>
    )
}
export default Footer