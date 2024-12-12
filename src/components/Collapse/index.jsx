import './Collapse.css'
function Collapse({title,content}){
    return(
        <div className="collapse">
            <div className="collapse__title">
                <p>
                    {title}
                </p>
                <button>
                </button>
            </div>
            
            <p className="collapse__content">
                {content}
            </p>
        </div>
    )
}
export default Collapse