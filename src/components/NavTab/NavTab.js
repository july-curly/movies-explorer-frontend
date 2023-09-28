import "./NavTab.css"
import "../../vendor/link.css"

function NavTab() {
  return (
    <section className="nav-tab">
      <ul className="nav-tab__links">
        <li><a href="#project" className="nav-tab__link link">О  проекте</a></li>
        <li><a href="#techs" className="nav-tab__link link">Технологии</a></li>
        <li><a href="#aboutme" className="nav-tab__link link">Студент</a></li>
      </ul>
    </section>
  )
}

export default NavTab;