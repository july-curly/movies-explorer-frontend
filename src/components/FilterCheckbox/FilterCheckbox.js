import "./FilterCheckbox.css"

function FilterCheckbox ({ isShortFilm, handleFilterShortFilms }) {

  return (
    <section className="filter-checkbox">
      <label className="filter-checkbox__container">
        <input
          type="checkbox"
          className="filter-checkbox__input"
          onChange={() => handleFilterShortFilms()}
          checked={isShortFilm}
        />
        <span className="filter-checkbox__slider"></span>
      </label>
      <p className="filter-checkbox__title">Короткометражки</p>
    </section>
  )
}

export default FilterCheckbox;