// Card that represents a content creator
// uses name, url, description, and an optional imageURL
import { Link } from "react-router";

export default function Card({id, name, url, description, imageURL}){
    return (
        <article>
            <img src={imageURL} />
            <div>
                <p>{name}</p>
                {/* Link to creator's detail page */}
                <Link to={`/creators/${id}`}>details</Link> 
                {/* Link to creator's website */}
                <Link to={url} target="_blank">{url}</Link>
            </div>
            <p>{description}</p>
        </article>

    );
}