// import { Link } from "react-router-dom";
import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css"
import Preloader from "../Preloader/Preloader";

function Movies ({ cards }) {
  const [isLoading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
  };

  return (
    <>
      <section className="movies">
        <SearchForm handleSearch={handleSearch} />
        <FilterCheckbox />
        {isLoading ? (<Preloader />) : (<MoviesCardList cards={cards}/>)}   
        <button className="movies__button">Еще</button>  
      </section>
      <Footer />
    </>
  )
}

export default Movies;