import {useEffect, useState} from "react";
import MovieCard from "./MovieCard.tsx";
import "./App.css"
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=b43c7385'

function App() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const searchMovies = async (title: string) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()

        setMovies(data.Search)
        console.log(data.Search)
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, [])

    return (
        <div className="app">
            <h1>MovieSearch</h1>
            <div className="search">
                <input type="text"
                       placeholder="Search"
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value) }
                />
                <img
                    src={SearchIcon}
                    alt="Search icon"
                    onClick={() => searchMovies(searchTerm) }
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>no movies found</h2>
                    </div>
                )}
        </div>
    )
}

export default App
