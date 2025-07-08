// Form page to add a creator with their details (name, url, etc.)
import { supabase } from "../client";
import { useNavigate } from "react-router";

export default function AddCreator({getCreators}){
    const navigate = useNavigate()

    // Handle form submission, add creator to DB
    async function handleForm(formData){
        const name = formData.get('name')
        const url = formData.get('url')
        const description = formData.get('description')
        const imageURL = formData.get('imageURL')

        const creator = {name, url, description, imageURL}

        // Insert creator to creators table
        const {data, error} = await supabase.from('creators').insert([creator]) 
        if(error){
            alert('Error adding creator: try again')
        }else{
            getCreators() // Get creators to make sure the list is updated on navigate
            navigate('/') // Navigate to homepage
        }
    }

    return (
        <form action={handleForm}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required/>

            <label htmlFor="url">Page URL</label>
            <input type="text" name="url" id="url" required/>

            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" required></textarea>

            {/* imageURL is optional */}
            <label htmlFor="imageURL">Image URL (optional)</label>
            <input type="text" name="imageURL" id="imageURL" />

            <button>Submit</button>
        </form>
    );
}