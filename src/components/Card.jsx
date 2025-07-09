// Card that represents a content creator
// uses name, url, description, and an optional imageURL
import { Link } from "react-router";

import './Card.css';

export default function Card({id, name, url, description, imageURL}){
    return (
        <article className="flex card">
            {imageURL ? <img src={imageURL} className="card-img"/> : <img src="https://i.pinimg.com/474x/43/0f/07/430f07ae232540762bb76d3da5e7e5e6.jpg" className="card-img"/>}
            <div className="card-inner">
                <div className="card-header flex">
                    <div className="flex">
                        <p className="card-name">{name}</p>
                        {/* Link to creator's website */}
                        <a href={url} target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/48/48967.png" width="20px" className="sc-icon"/>
                        </a>
                    </div>
                    {/* Link to edit the creator's information */}
                    <Link to={`/creators/${id}/edit`}>...</Link>
                </div>
                <p className="card-desc">{description}</p>
                {/* Link to creator's detail page */}
                <Link to={`/creators/${id}`} className="profile-link">View Profile</Link> 
            </div>
        </article>

    );
}