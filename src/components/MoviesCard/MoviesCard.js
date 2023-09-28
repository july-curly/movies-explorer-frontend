import { useLocation } from "react-router-dom";
import "./MoviesCard.css"
import { useState } from "react";


function MoviesCard( {card} ) {
  // const currentUser = useContext(CurrentUserContext)
  // const isLike = card.likes.some(i => i._id === currentUser._id)
  const [isSave, setIsSave] = useState(false);
  const location = useLocation();

  const handleSaveClick = () => {
    setIsSave(!isSave);
  }


  return (
    <div className="movies-card">
      <img className="movies-card__img" alt={card.name} src={card.link} />
      <div className="movies-card__info">
        <h2 className="movies-card__title">{card.name}</h2>
        <p className="movies-card__description">{card.duration}</p>
        {location.pathname === '/movies' ? (
          <button
            type="button"
            className={`movies-card__movie ${isSave && 'movies-card__movie_active'}`}
            onClick={handleSaveClick}>
          </button>
        ) : (
          <button
            type="button"
            className={`movies-card__save ${isSave && 'movies-card__movie_active'}`}
            onClick={handleSaveClick}>
          </button>
        )}
      </div>

    </div> 
  )
}
export default MoviesCard;