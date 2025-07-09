// Form page to edit a creator with their details (name, url, etc.)
import { supabase } from "../client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

import './EditCreator.css';

export default function EditCreator({getCreators}){
    const navigate = useNavigate()

    // Get creator's data from DB
    const {id} = useParams()
    const [creator, setCreator] = useState(null)
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

    // Handle form submission
    async function handleForm(formData){
        // Update the creator's data
        const {data, error} = await supabase
            .from('creators')
            .update(creator)
            .eq('id', id)
        
        // Navigate home
        await getCreators()
        navigate('/')
    }

    // Handle change in creator's information from inputs
    // (for pre-fill form purposes)
    function handleChange(e){
        setCreator((prev)=>({
            ...prev, 
            [e.target.name]: e.target.value
        }))
    }

    // Delete a creator from the DB 
    async function deleteCreator(){
        const {data, error} = await supabase
            .from('creators')
            .delete()
            .eq('id', id)
        // Navigate home
        await getCreators()
        navigate('/')
    }

    return (
        creator ? 
        <form action={handleForm} className="edit-form flex">
            <p className="form-title">Edit Creator</p>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={creator.name} onChange={handleChange}/>

            <label htmlFor="url">Page URL</label>
            <input type="text" name="url" id="url" value={creator.url} onChange={handleChange}/>

            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" value={creator.description} onChange={handleChange}></textarea>

            {/* imageURL is optional */}
            <label htmlFor="imageURL">Image URL (optional)</label>
            <input type="text" name="imageURL" id="imageURL" value={creator.imageURL ? creator.imageURL : ""} onChange={handleChange}/>

            <button className="edit-submit">Submit Edits</button>
            <button className="delete-btn" type="button" onClick={deleteCreator}>Delete Creator (PERMANENT)</button>
        </form>
        :
        <>Loading creator data...</>
    );
}