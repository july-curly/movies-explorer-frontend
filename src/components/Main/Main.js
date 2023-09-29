import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import NavTab from "../NavTab/NavTab";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

function Main () {
  return(
    <>
      <main className="main">
        <Promo/>
        <NavTab/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>
      <Footer/>
   </>
  )
}

export default Main;