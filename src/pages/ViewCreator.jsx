// Page for creator detail view
import { supabase } from "../client";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

export default function ViewCreator(){
    // Get the creator's id 
    const {id} = useParams() 
    const [creator, setCreator] = useState(null)

    // Get the creator's information from DB 
    useEffect(()=>{
        async function getCreatorData(){
            const {data, error} = await supabase
                .from('creators')
                .select()
                .eq('id', id)
            setCreator(data[0])
        }
        getCreatorData()
    }, [])

    
    return (
        creator ? 
        // Display creator detials (name, url, desc, and img)
        <article>
            <div>
                {creator.imageURL ? <img src={creator.imageURL} /> : <></>}
                <p>{creator.name}</p>
            </div>
            <Link to={creator.url}>{creator.url}</Link>
            <p>{creator.description}</p>
        </article>
        :
        <>Loading creator...</>
    );
}