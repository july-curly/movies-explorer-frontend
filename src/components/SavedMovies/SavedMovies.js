import { useState } from "react";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies ({ cards }) {
  const [isLoading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
  }; 

  return (
    <>
      <section className="saved-movies">
        <SearchForm handleSearch={handleSearch} />
        <FilterCheckbox />
        {isLoading ? (<Preloader />) : (<MoviesCardList cards={cards}/>)} 
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies;