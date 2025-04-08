import { useState, useEffect } from "react";
import CardDragonBall from "../components/CardDragonBall";


const DragonBall = () =>{

    const apiUrl = 'https://dragonball-api.com/api/characters';
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)


    const fetchCharacters = async() =>{
        try {
            const response = await fetch(apiUrl)
            const data = await response.json()
            console.log(data)
            setCharacters(data.items)
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
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {characters.map((character) => (
                        <CardDragonBall key={character.id} character={characters}/>
                     ))}
                </div>
            )}
        </div>
    )
   
}

export default DragonBall;