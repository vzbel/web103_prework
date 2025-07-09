import Card from "../components/Card";

import { Link } from "react-router";

import './ShowCreators.css';

// Page showing all creators
export default function ShowCreators({creators}){
    return (
        <main>
            <header className="flex">
                <div>
                    <h1>SoundCloud DB</h1>
                    <p>Discover musicians and producers across SoundCloud!</p>
                    <Link to={`/creators/add`} className="add-creator">Add a Creator</Link>
                </div>
            </header>
            <section className="creator-grid">
                <div className="flex">
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
                </div>
            </section>
        </main>
    );
}