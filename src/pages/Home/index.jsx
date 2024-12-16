import Gallery from '../../components/Gallery'
import Banner from '../../components/Banner'
import bannerPicture from '../../assets/images/bannerPictureHome.png'
import './Home.css'
function Home(){
    return(
        <div className='home'>
            <Banner title='Chez vous, partout et ailleurs' img={bannerPicture}/>
            <Gallery/>
        </div>
    );
}
export default Home