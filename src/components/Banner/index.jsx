import './Banner.css'
function Banner({img,title}){
    return (
        <div className="banner">
            <img src={img} alt="" className='banner__picture'/>
            <h1 className="banner__title">{title}</h1>
        </div>
    )
}
export default Banner