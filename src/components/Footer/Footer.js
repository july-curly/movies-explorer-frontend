import { useLocation } from "react-router-dom";
import "./Footer.css"
import "../../vendor/link.css"

function Footer() {
  const location = useLocation();

  return(
    location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies" ? 
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__info">&copy; 2023</p>
        <ul className="footer__links">
          <li>
            <a className="footer__link link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li>
            <a className="footer__link link" href="https://github.com/july-curly" target="_blank" rel="noreferrer">Github</a>
          </li>
        </ul>
      </div>
    </footer>
    :
    <></>
  )
} 

export default Footer;