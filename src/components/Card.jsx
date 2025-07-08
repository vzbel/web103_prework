// Card that represents a content creator
// uses name, url, description, and an optional imageURL
export default function Card({name, url, description, imageURL}){
    return (
        <article>
            <img src={imageURL} />
            <div>
                <p>{name}</p>
                <a href={url}>{url}</a>
            </div>
            <p>{description}</p>
        </article>

    );
}