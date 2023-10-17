import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import { LargePage, 
         LargePageCardCount, 
         LargePageCardCountNext, 
         MediumPage, 
         MediumPageCardCount, 
         MediumPageCardCountNext,
         SmallPage,
         SmallPageCardCount,
         MaxPageCardCount,
         MaxPageCardCountNext } from "../../utils/constants"

function MoviesCardList( {searchResults, saveMovies, isErrorServer, firstSearchQuery, addCard, onDelete} ) {
  const location = useLocation();
  const [count, setCount] = useState('');
  const cards = searchResults.slice(0, count)

  function requantity() {
    const quantity = { counts: MaxPageCardCount, countNext: MaxPageCardCountNext }
    if(window.innerWidth < LargePage) {
      quantity.counts = LargePageCardCount
      quantity.countNext = LargePageCardCountNext
    } 
    if (window.innerWidth < MediumPage) {
      quantity.counts = MediumPageCardCount
      quantity.countNext = MediumPageCardCountNext
    }
    if (window.innerWidth < SmallPage) {
      quantity.counts = SmallPageCardCount
      quantity.countNext = MediumPageCardCountNext
    } 
    return quantity
  }

  function handleMoreCards() {
    setCount(count + requantity().countNext)
  } 

  useEffect(() => {
    if(location.pathname === '/movies') {
      setCount(requantity().counts)

      function changeOfQuantity() {
        if(window.innerWidth >= LargePage){
          setCount(requantity().counts)
        }
        if(window.innerWidth < LargePage){
          setCount(requantity().counts)
        }
        if(window.innerWidth < MediumPage){
          setCount(requantity().counts)
        }
        if(window.innerWidth < SmallPage){
          setCount(requantity().counts)
        }
      }
      
      window.addEventListener('resize', changeOfQuantity)
      return () => window.removeEventListener('resize', changeOfQuantity)
    }
   }, [location.pathname, searchResults])

  return (
    <section className="movies-list">
      <div className="movies-list__cards">
        {location.pathname === '/movies' && cards.length !== 0 ?
        cards.map((card) => {
          return (<MoviesCard
            card={card}
            key={card.id}
            saveMovies={saveMovies}
            addCard={addCard}
          />)
        }) : searchResults.length !== 0 ?
        searchResults.map((card) => {
          return (<MoviesCard
            card={card}
            key={card._id}
            onDelete={onDelete}
          />)
        }) : isErrorServer ? 
        <span className="movies-list__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </span>
        : !firstSearchQuery ?
        <span className="movies-list__error">Ничего не найдено.</span>
        : <span className="movies-list__error">Начните поиск фильмов.</span>}
      </div>
      {location.pathname === '/movies' && <button type='button' className={`movies-list__button ${count >= searchResults.length && 'movies-list__button_hidden'}`} onClick={handleMoreCards}>Еще</button>}  
    </section>
  )
}

export default MoviesCardList;