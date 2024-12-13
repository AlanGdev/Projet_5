import logo from '../../assets/images/LOGO.png'
import Navbar from '../Navbar'
import './Header.css'
function Header(){
    return(
        <header className='header'>
            <img src={logo} alt="" className='header__logo'/>
            <Navbar/>
        </header>

    )
}
export default Header