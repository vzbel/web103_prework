import Card from "../components/Card";

import { Link } from "react-router";

// Page showing all creators
export default function ShowCreators({creators}){
    return (
        <main>
            <header>
                <h1>Creators</h1>
                <p>Displaying all creators</p>
                <Link to={`/creators/add`}>Add a Creator</Link>
            </header>
            <section>
                {
                    // Render each creator as a Card component showing their information 
                    creators ? 
                    creators.map((creator)=>{
                        return (
                            <Card 
                            id={creator.id}
                            name={creator.name}
                            url={creator.url}
                            description={creator.description}
                            imageURL={creator.imageURL}
                            key={creator.name}
                            />
                        );
                    })
                    :
                    <>There are no creators yet.</>
                }
            </section>
        </main>
    );
}