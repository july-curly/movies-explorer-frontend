import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useCallback } from "react";
import { ShortMovieDuration } from "../../utils/constants";

function SavedMovies ({ saveMovies, onDelete, setIsError }) {
  const [searchResults, setSearchResults] = useState(saveMovies);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [firstSearchQuery, setFirstSearchQuery] = useState(true);

  const filterMovies = useCallback((search, isShortFilm, movies) => {
    setSearchResults(movies.filter((item) => {
      const nameMovie = item.nameRU.toLowerCase().includes(search.toLowerCase())
      return isShortFilm ? (nameMovie && item.duration <= ShortMovieDuration) : nameMovie;
    }))
    setSearchQuery(search);
  }, [])

  function handleSearch(search) {
    filterMovies(search, isShortFilm, saveMovies);
    setFirstSearchQuery(false)
  }

  useEffect(() => {
    if (saveMovies.length === 0) {
      setFirstSearchQuery(true)
    } else {
      setFirstSearchQuery(false)
    }
   filterMovies(searchQuery, isShortFilm, saveMovies)
  }, [filterMovies, searchQuery, isShortFilm, saveMovies])

  function handleFilterShortFilms() {
    if(isShortFilm) {
      setIsShortFilm(false);
      setFirstSearchQuery(false);
      filterMovies(searchQuery, false, saveMovies)
    } else {
      setIsShortFilm(true);
      setFirstSearchQuery(false);
      filterMovies(searchQuery, true, saveMovies)
    }
  }

   return (
    <>
      <section className="saved-movies">
        <SearchForm handleSearch={handleSearch} searchQuery={searchQuery} saveMovies={saveMovies} setIsError={setIsError}/>
        <FilterCheckbox isShortFilm={isShortFilm} handleFilterShortFilms={handleFilterShortFilms}/>
        <MoviesCardList firstSearchQuery={firstSearchQuery} onDelete={onDelete} searchResults={searchResults}/>
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies;