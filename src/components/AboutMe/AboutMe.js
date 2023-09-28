import "./AboutMe.css"
import pic from '../../images/pic.jpg'
import "../../vendor/link.css"
import Title from "../Title/Title"

function AboutMe() {
  return(
    <section className="aboutme" id="aboutme">
      <Title title={'Студент'}/>
      <div className="aboutme__info">
        <img className="aboutme__photo" src={pic} alt="Фото студента"/>
        <div className="aboutme__content">
          <h3 className="aboutme__content-title">Виталий</h3>
          <p className="aboutme__content-subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__content-description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
            и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, 
            как прошёл курс по веб&#8209;разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className="aboutme__link link" href="https://github.com/july-curly" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;