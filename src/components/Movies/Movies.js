import { useCallback, useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css"
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";

function Movies ({ setIsError, saveMovies, addCard }) {
  const [isLoading, setLoading] = useState(false);
  const [isMovies, setIsMovies] = useState([]);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isErrorServer, setErrorServer] = useState(false);
  const [searchResults, setSearchResults] = useState([]); 
  const [firstSearchQuery, setFirstSearchQuery] = useState(true);

  const filterMovies = useCallback((search, isShortFilm, movies) => {
    localStorage.setItem('search', JSON.stringify(search));
    localStorage.setItem('shorts', JSON.stringify(isShortFilm));
    localStorage.setItem('movies', JSON.stringify(movies));
    setSearchQuery(search);
    setSearchResults(movies.filter((item) => {
      const nameMovie = item.nameRU.toLowerCase().includes(search.toLowerCase())
      return isShortFilm ? (nameMovie && item.duration <= 40) : nameMovie;
    }))
  }, [])

  function searchMovies(search) {
    if(isMovies.length === 0) {
      setLoading(true)
      moviesApi.getMovies()
        .then((res) => {
          setIsMovies(res);
          setIsShortFilm(false);
          setErrorServer(false);
          setFirstSearchQuery(false)
          filterMovies(search, isShortFilm, res)
        })
        .catch((error) => {
          console.error(`Ошибка поиска фильмов ${error}`)
          setErrorServer(true)
        })
        .finally(() => setLoading(false))
    } else {
      filterMovies(search, isShortFilm, isMovies)
    }
  }

  function handleFilterShortFilms() {
    if(isShortFilm) {
      setIsShortFilm(false);
      filterMovies(searchQuery, false, isMovies)
    } else {
      setIsShortFilm(true);
      filterMovies(searchQuery, true, isMovies)
    }
  }

  useEffect (() => {
    if (localStorage.movies && localStorage.shorts && localStorage.search) {
      const movies = JSON.parse(localStorage.movies);
      const search = JSON.parse(localStorage.search);
      const isShortFilm = JSON.parse(localStorage.shorts);
      setIsMovies(movies);
      setFirstSearchQuery(false);
      setSearchQuery(search);
      setIsShortFilm(isShortFilm);
      setErrorServer(false);
      filterMovies(search, isShortFilm, movies)
    }
  }, [filterMovies])

  return (
    <>
      <section className="movies">
        <SearchForm handleSearch={searchMovies} setErrorServer={setErrorServer} searchQuery={searchQuery} isErrorServer={isErrorServer} setIsError={setIsError}/>
        <FilterCheckbox isShortFilm={isShortFilm} handleFilterShortFilms={handleFilterShortFilms} />
        {isLoading ? 
          (<Preloader />) 
          : 
          (<MoviesCardList 
            saveMovies={saveMovies} 
            searchResults={searchResults} 
            isErrorServer={isErrorServer} 
            firstSearchQuery={firstSearchQuery}
            addCard={addCard}
            />)}   
      </section>
      <Footer />
    </>
  )
}

export default Movies;