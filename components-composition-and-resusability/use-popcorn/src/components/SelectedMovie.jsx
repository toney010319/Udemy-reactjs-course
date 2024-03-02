/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import StartRating from './StartRating'
import Loader from './Loader'
const KEY = '7857c958'
const SelectedMovie = ({ selectedId, onCloseMovie }) => {
    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const {
        Title: title,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre } = movie

    useEffect(() => {
        const getMovieDetaions = async () => {
            setIsLoading(true)
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`)
            const data = await res.json()
            setMovie(data)
            setIsLoading(false)
        }
        getMovieDetaions()
    }, [selectedId])

    useEffect(function () {
        document.title = title ? `Movie: ${title}` : 'Movie'
        return function () {
            document.title = 'usePopcorn'
        }
    }, [title])

    useEffect(() => {
        const callBack = (e) => {

            if (e.code === 'Escape') {
                onCloseMovie()
                console.log("CLOSING")
            }
        }
        document.addEventListener('keydown', callBack)
        return function () {
            document.removeEventListener('keydown', callBack)
        }

    }, [onCloseMovie])

    return (
        <div className='details'>
            {isLoading ? (<Loader />) :
                (
                    <>
                        <header>
                            <button className='btn-back' onClick={onCloseMovie}>&larr;</button>
                            <img src={poster} alt={`Poster of the ${movie} movie`} />
                            <div className="details-overview">
                                <h2>{title}</h2>
                                <p>{released} &bull; {runtime}</p>
                                <p>{genre} </p>
                                <p><span>⭐</span>{imdbRating} IMDb rating</p>
                            </div>
                        </header>
                        <section>
                            <div className='rating'>
                                <StartRating maxRating={5} size={12} />
                            </div>

                            <p><em>{plot}</em></p>
                            <p>Starring {actors}</p>
                            <p>Directed by {director}</p>
                        </section>
                    </>
                )
            }
        </div>
    )
}

export default SelectedMovie