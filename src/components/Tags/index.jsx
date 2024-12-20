import './Tags.css'
function Tags({tags}){
    return(
        <ul className="tags">
            {tags.map((tag)=>
            <li className='tags__item' key={tag}>{tag}</li>)}
        </ul>
    )
}
export default Tags