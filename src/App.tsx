
import {useEffect} from "react";

//key b43c7385
const API_URL = 'http://www.omdbapi.com?apikey=b43c7385'

function App() {

    const searchMovies = async (title:string) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()

        console.log(data.Search)
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, [])

    return (
        <>
        </>
    )
}

export default App
