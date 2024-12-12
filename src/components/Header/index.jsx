import logo from '../../assets/images/LOGO.png'
import Navbar from '../Navbar'
import './Header.css'
function Header(){
    return(
        <header className='banner'>
            <img src={logo} alt="" className='banner__logo'/>
            <Navbar/>
        </header>

    )
}
export default Header