import { useState, useEffect } from "react";
import CardMorty from "../components/CardMorty";


const Morty = () =>{

    const apiUrl = "https://rickandmortyapi.com/api/character";
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)


    const fetchCharacters = async() =>{
        try {
            const response = await fetch(apiUrl)
            const data = await response.json()
            console.log(data)
            setCharacters(data.results)
        } catch (error) {
            console.error("error fetching characters:", error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchCharacters()
    }, [])
    
    return(
        <div>
            <h1 className="text-center text-2xl">Personajes</h1>
            {loading ?(
                <p>Cargando personajes...</p>
            ):(
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {characters.map((character) => (
                        <CardMorty key={character.id} character={character}/>
                     ))}
                </div>
            )}
        </div>
    );
   
};

export default Morty;

