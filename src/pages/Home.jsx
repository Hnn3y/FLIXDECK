import MovieCard from '../Card.jsx';
import { useState, useEffect } from 'react';
import { searchMovies, getMovies } from '../services/api.js';
import '../css/Home.css';


function Home () {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState (null)
    const [loading, setLoading ] = useState(true)

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const popularMovies = await getMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to Load.");
            } finally {
                setLoading(false);
            }
        };
    
        loadMovies(); 
    }, []);
    

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const results = await searchMovies(searchQuery);
            setMovies(results);
        } catch (error) {
            console.log(error);
            setError("Search failed.");
        }
        setSearchQuery("");
    };
    

    return (
    <div className="home">
        <form onSubmit={handleSearch} className='search-form'>
            <input type="text" placeholder="Search Movies..." className='search-input' value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="Submit" className="search-button">Search</button>
        </form>


        {error && <div className="error-message">{error}</div>}
        
        {loading ? (
            <div className="loading"> Loading... </div>) : 
            (   <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
    ) }

    </div>
    );
} 

export default Home;