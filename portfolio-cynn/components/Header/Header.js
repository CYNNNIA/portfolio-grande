import './Header.css'
import data from '../../data/data'

const template = () => {
  return `
  <header class="sidebar"> 
    <div><h1>Cynthia Lorenzo López</h1>
    <img src="portfolio-cynn/dist/8c5eadb0-fcd2-49d6-8805-326515518d51.jpg" />
    </div>
    
    <nav> 
      <ul class="nav-horizontal-list">
        <li>
          <a href="#aboutme">Acerca de mi</a>
        </li>
        <li>
          <a href="#education">Formación</a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
      </ul>
    </nav>
    
    <div class="otros">
    <h2>         Desarrolladora Frontend</h2>
    <ul class="horizontal-list">
      <li>       - HTML</li>
      <li>       - CSS</li>
      <li>       - JavaScript</li>
    </ul>
  </div>

    <section class="caracteristicas">
      <h2>Características</h2>
      <ul class="horizontal-list">
        <li> - Resolutiva</li>
        <li>- Apasionada</li>
        <li>- Entusiasta</li>
        <li>- Optimista</li>
        <li>- Determinada</li>
        <li>- Creativa</li>
      </ul>
    </section>

  </header>
  `
}

const Header = () => {
  return template()
}

export default Header
