import "./SearchForm.css"
import iconFind from '../../images/icon-find.svg';

function SearchForm ({ handleSearch }) {
  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__input"
        />
        <button type="submit" className="search-form__button">
          <img className="search-form__img" src={iconFind} alt="Кнопка поиска"/>
        </button>
      </form>
    </section>
  )
}

export default SearchForm;