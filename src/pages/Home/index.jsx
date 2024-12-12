import Gallery from '../../components/Gallery'
import Banner from '../../components/Banner'
function Home(){
    return(
        <div className='Home'>
            <Banner title='Chez vous, partout et ailleurs'/>
            <Gallery/>
        </div>
    );
}
export default Home