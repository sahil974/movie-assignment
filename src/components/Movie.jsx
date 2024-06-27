import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Movie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate("");
    }

    const fetchMovie = async (id) => {
        try {
            const data = await fetch(`https://www.omdbapi.com/?apikey=8fc6c84a&i=${id}`)

            const response = await data.json()
            console.log(response);
            setMovie(response)

        } catch (error) {
            console.log("error in fetch movie");
        }
    }


    useEffect(() => {
        fetchMovie(id)
    }, [])


    return (
        <div>
            <button onClick={handleSubmit}>Home</button>
            <h1 className='text-4xl m-5'>Movie Page</h1>
            {!movie ? (
                <div>Movie not found or Still Loading</div>
            ) : (
                <div className='flex gap-3'>
                    <div>
                        <img src={movie.Poster} alt="img" height={500} width={200} />
                    </div>

                    <div>

                        <p>Title : {movie.Title}</p>
                        <p>Writer : {movie.Writer}</p>
                        <p>IMDB Rating : {movie.imdbRating}</p>
                        <p>Actors : {movie.Actors}</p>




                    </div>

                </div>
            )}
        </div>
    )
}

export default Movie