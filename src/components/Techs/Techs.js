import Title from "../Title/Title";
import "./Techs.css"

function Techs() {
  return(
    <section className="techs" id="techs">
      <Title title={'Технологии'}/>
      <div className="techs__content">
        <h3 className="techs__content-title">7 технологий</h3>
        <p className="techs__content-description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <ul className="techs__items">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs;