import "./Portfolio.css"
import "../../vendor/link.css"

function Portfolio() {
  return(
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__items">
        <li>
          <a className="portfolio__item-link link" href="https://july-curly.github.io/meowmeowcatch/" target="_blank" rel="noreferrer">
            <p className="portfolio__item-title">Статичный сайт</p>
            <p className="portfolio__item-img">↗</p>
          </a>  
        </li>
        <li>
          <a 
          className="portfolio__item-link link" href="https://july-curly.github.io/russian-travel/" target="_blank" rel="noreferrer">
            <p className="portfolio__item-title">Адаптивный сайт</p>
            <p className="portfolio__item-img">↗</p>
          </a>
        </li>
        <li>
          <a className="portfolio__item-link link" href="https://july.nomoredomainsicu.ru" target="_blank" rel="noreferrer">
            <p className="portfolio__item-title">Одностраничное приложение</p>
            <p className="portfolio__item-img">↗</p>
          </a>
        </li>
      </ul>
      
    </section>
  )
}

export default Portfolio;