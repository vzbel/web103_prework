// Page for creator detail view
import { supabase } from "../client";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

import "./ViewCreator.css";

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
        <article className="profile-card">
            <div className="pf-div-1">
                {creator.imageURL ? <img src={creator.imageURL} className="pf-img" /> : <img src="https://i.pinimg.com/474x/43/0f/07/430f07ae232540762bb76d3da5e7e5e6.jpg" className="pf-img"/>}
                <div className="pf-name-sc flex">
                    <p className="pf-name">{creator.name}</p>
                    <a href={creator.url} target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/48/48967.png" width="20px" className="sc-icon"/>
                    </a>
                </div>
            </div>
            <div>
                <p className="pf-desc">{creator.description}</p>
                <Link to={`/creators/${id}/edit`} className="pf-edit">edit creator</Link>
            </div>
        </article>
        :
        <>Loading creator...</>
    );
}