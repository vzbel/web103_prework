// Card that represents a content creator
// uses name, url, description, and an optional imageURL
import { Link } from "react-router";

export default function Card({id, name, url, description, imageURL}){
    return (
        <article>
            {imageURL ? <img src={imageURL} /> : <></>}
            <div>
                <p>{name}</p>
                {/* Link to creator's detail page */}
                <Link to={`/creators/${id}`}>details</Link> 
                {/* Link to creator's website */}
                <a href={url} target="_blank">{url}</a>
            </div>
            <p>{description}</p>
        </article>

    );
}