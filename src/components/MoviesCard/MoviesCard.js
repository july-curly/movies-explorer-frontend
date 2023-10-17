import { Link, useLocation } from "react-router-dom";
import "./MoviesCard.css"
import { useEffect, useState } from "react";


function MoviesCard({ card, saveMovies, addCard, onDelete}) {
  const location = useLocation();
  const[isSave, setIsSave] = useState(false)

  useEffect(() => {
    if (location.pathname === '/movies') {
      setIsSave(saveMovies.some(item => card.id === item.movieId))
    }
  }, [location.pathname, saveMovies, card.id, setIsSave])
  
  function handleSaveClick () {
    if (saveMovies.some(item => card.id === item.movieId)) {
      setIsSave(true);
      addCard(card);
    } else {
      setIsSave(false);
      addCard(card);
    }
  }

  function formatMovieDuration(mins) {
    return `${Math.floor(mins / 60)}ч ${mins % 60}м`;
  }

  return (
    <div className="movies-card">
      <Link to={card.trailerLink} target="blank">
        <img className="movies-card__img" alt={card.name} src={location.pathname === '/saved-movies' ? `${card.image}` : `https://api.nomoreparties.co${card.image.url}`} />
      </Link>
      <div className="movies-card__info">
        <div className="movies-card__description">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <p className="movies-card__duration">{formatMovieDuration(card.duration)}</p>
        </div>
        {location.pathname === '/movies' ? (
          <button
            type="button"
            className={`movies-card__button button movies-card__button_movie ${isSave && 'movies-card__button_movie_like'}`}
            onClick={handleSaveClick}>
          </button>
        ) : (
          <button
            type="button"
            className={`movies-card__button movies-card__button_save`}
            onClick={() => onDelete(card._id)}>
          </button>
        )}
      </div>

    </div> 
  )
}
export default MoviesCard;