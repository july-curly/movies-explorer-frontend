import "./SearchForm.css"
import iconFind from '../../images/icon-find.svg';
import useFormValidation from "../../utils/useFormValidation";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../vendor/button.css"

function SearchForm ({ handleSearch, searchQuery, saveMovies, setIsError}) {
  const { values, errors, handleChange, reset } = useFormValidation(); 
  const location = useLocation();

  function onSearch(evt) {
    evt.preventDefault();
    if(evt.target.search.value) {
      handleSearch(evt.target.search.value);
      setIsError(false)
    } else {
      setIsError(true)
    }
  } 

  useEffect (() => {
    if((location.pathname === '/saved-movies' && saveMovies.length === 0)) {
      reset ({ search: '' })
    } else {
      reset({ search: searchQuery })
    }
    setIsError(false)
  }, [saveMovies, searchQuery, setIsError, location.pathname, reset])

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={onSearch}>
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__input"
          required
          error={errors.search}
          name="search"
          onChange={(evt) => {
            handleChange(evt);
            setIsError(false)
          }}
          value={values.search || ''}
        />
        <button type="submit" className="search-form__button button">
          <img className="search-form__img" src={iconFind} alt="Кнопка поиска"/>
        </button>
      </form>
    </section>
  )
}

export default SearchForm;