import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    const navigate = useNavigate()

    const handleSearch = async () => {
        try {
            const data = await fetch(`https://www.omdbapi.com/?apikey=8fc6c84a&s=${query}&page=${page}`)

            const response = await data.json()
            console.log(response);
            // console.log(response.Search);
            setMovies(response.Search)
        } catch (error) {
            console.log("error in handleSearch");
        }
    }

    const handleMovie = (id) => {
        navigate(`/movie/${id}`)
    }



    useEffect(() => {
        handleSearch()
    }, [page])



    return (
        <div>
            <h1 className='text-4xl'>Movie search</h1>
            <div className='flex gap-2 m-5'>
                <input className='p-4' type="text" name='query' value={query} onChange={(e) => { setQuery(e.target.value) }} />
                <button onClick={handleSearch}>Search</button>
            </div>

            <div>
                <ul>
                    {movies && movies.map((movie) => (
                        <li onClick={() => { handleMovie(movie.imdbID) }} className='p-5' key={movie.imdbID}>

                            <p>Title : {movie.Title} Year : {movie.Year}</p>

                        </li>
                    ))}
                </ul>
            </div>

            {movies && (
                <div>

                    <button onClick={() => {
                        if (page > 0)
                            setPage(page - 1)
                    }}>Prev page</button>

                    <button onClick={() => { setPage(page + 1) }}>Next page</button>
                </div>

            )}
        </div>
    )
}

export default Search