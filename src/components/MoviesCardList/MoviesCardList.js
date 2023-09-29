import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList( {cards} ) {
  

  return (
    <section className="movies-list">
      <div className="movies-list__cards">
        {cards.map((card) => (
          <MoviesCard
            card={card}
            key={card._id}
          />
        ))}
      </div>     
    </section>
  )
}

export default MoviesCardList;