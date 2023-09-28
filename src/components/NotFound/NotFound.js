import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css"
import "../../vendor/link.css"

function NotFound () {
  const navigate = useNavigate();
  const goBackLink = () => {navigate(-1)}

  return (
    <section className="notfound">
      <h2 className="notfound__title">404</h2>
      <p className="notfound__subtitle">Страница не найдена</p>
      <Link className="notfound__link link" onClick={goBackLink}>Назад</Link>
    </section>
  )
}

export default NotFound;