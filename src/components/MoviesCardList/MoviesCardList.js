import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList( {cards} ) {
  

  return (
    <section className="movies-list">
      {cards.map((card) => (
        <MoviesCard
          card={card}
          key={card._id}
        />
      ))}
       
      <button className="movies-list__button">Еще</button>
    
      
    </section>
  )
}

export default MoviesCardList;