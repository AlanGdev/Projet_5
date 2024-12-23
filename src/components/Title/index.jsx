import './Title.css'
function Title({title,location}){
    return(
        <div className="title-container">
            <h1 className="title-container__title">{title}</h1>
            <p className="title-container__location">{location}</p>
        </div>
    )
}
export default Title