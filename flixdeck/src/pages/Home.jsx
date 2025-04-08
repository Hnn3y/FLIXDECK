import MovieCard from '../Card.jsx';
import { useState } from 'react';


function Home () {
    const [searchQuery, setSearchQuery] = useState("")


    const movies = [
        {id: 1, title: "Back in Action", release:"2025"},
        {id: 2, title: "The Witcher", release:"2025"},
        {id: 3, title: "Game Changer", release:"2025"},
        {id: 4, title: "Secrect Level", release:"2025"},
        {id: 5, title: "Black Knight", release:"2025"},
        {id: 6, title: "Risk", release:"2025"},
    ]

    const handleSearch = () => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };

    return (
    <div className="home">
        <form onSubmit={handleSearch} className='search-form'>
            <input type="text" placeholder="Search Movies..." className='search-input' value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="Submit" className="search-button">Search</button>
        </form>

        <div className="grid">
            {movies.map(
                (movie) => 
                movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id}/> )
                )}
        </div>
    </div>
    )
} 

export default Home;