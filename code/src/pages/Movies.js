import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './movies.css'


export const Movies = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=1a0b43b3e6aab8215b964c141c11111b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=1771')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  return (
    <div className="moviepage">
      {movies.map((results) => (
        <div className="movie-card" key={results.id}>
          <Link to={`movies/${results.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342${results.poster_path}`} alt={results.original_title} />
            <div className="movie-details">
              <h2>{results.original_title}</h2>
              <h4> {results.release_date}</h4>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}