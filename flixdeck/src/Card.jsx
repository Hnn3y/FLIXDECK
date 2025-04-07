function Movie({movie}) {

    function buttonClick(){
        alert("clicked")
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <img/>

            <div className="movie-overlay">
                <button className="favorite" onClick={buttonClick}>♡</button>
            </div>
        </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release}</p>
        </div>
    </div>
} 

export default Movie;