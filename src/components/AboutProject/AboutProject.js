import Title from "../Title/Title";
import "./AboutProject.css"

function AboutProject() {
  return(
    <section className="about-project" id="project">
      <Title title='О проекте'/>
      <div className="about-project__content">
        <h3 className="about-project__content-title about-project__content-title_one">Дипломный проект включал 5 этапов</h3>
        <p className="about-project__content-description about-project__content-description_one">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <h3 className="about-project__content-title about-project__content-title_two">На выполнение диплома ушло 5 недель</h3>
        <p className="about-project__content-description about-project__content-description_two">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about-project__info">
        <p className="about-project__info-duration about-project__info-duration_backend">1 неделя</p>
        <p className="about-project__info-duration about-project__info-duration_frontend">4 недели</p>
        <p className="about-project__info-task">Back-end</p>
        <p className="about-project__info-task">Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;