import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import { tempMovieData, tempWatchedData } from "./tempMoviesData";
import Main from "./components/Main";
import NumResults from "./components/NumResults";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMoviesList from "./components/WatchedMoviesList";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Search from "./components/Search";

import MovieDetails from "./components/MovieDetails";

const KEY = '7857c958'

export default function App() {

  const [movies, setMovies] = useState([]);
  // const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null)
  const [watched, setWatched] = useState(() => {
    const storedValue = localStorage.getItem("watched")
    return JSON.parse(storedValue)
  }
  );

  const handleSelectedId = (id) => {
    setSelectedId((selectedId) => id === selectedId ? null : id)
  }
  const handleCloseMovie = () => {
    setSelectedId(null)
    // document.title = 'usePopcorn'
  }
  useEffect(() => {
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        setIsLoading(true)
        setError('')
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal })
        if (!res.ok) throw new Error("Something went wrong")
        const data = await res.json()
        console.log(data)
        if (data.Response === "False") throw new Error("Movie not found")
        setMovies(data.Search)
        setError('')
      } catch (err) {

        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      }
      finally {
        setIsLoading(false)

      }
    }
    if (query.length < 3) {
      setMovies([])
      setError('')
      return
    }
    handleCloseMovie()
    fetchMovies()
    return function () {
      controller.abort()
    }
  }, [query])

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);

    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));

  }, [watched])


  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>


      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} watched={watched} onSelectMovie={handleSelectedId} />}
          {error && <Error message={error} />}
        </Box>

        <Box>
          {
            selectedId ? (<MovieDetails selectedId={selectedId} watched={watched} onCloseMovie={handleCloseMovie} onAddWatched={handleAddWatched} />) :
              (<>
                <WatchedSummary watched={watched} />
                <WatchedMoviesList watched={watched} onDeleteWatched={handleDeleteWatched} />
              </>)
          }
        </Box>
      </Main>
    </>
  );
}

