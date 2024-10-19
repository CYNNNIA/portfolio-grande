import './Main.css'
import { AboutMe } from '../AboutMe/AboutMe'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'

const template = () => {
  return `
    <main>
      ${AboutMe()}
      <div class="tabs-container">
        <!-- Botones de pestañas se generarán dinámicamente aquí -->
      </div>
      <div id="content">
        ${Experience()}
      </div>
      ${Projects()}
    </main>
  `
}

export const Main = () => {
  return template()
}

export const addMainListeners = () => {
  const tabsContainer = document.querySelector('.tabs-container')
  const content = document.querySelector('#content')

  const sections = {
    Formación: Education,
    Experiencia: Experience
  }

  // Crear los botones de pestañas dinámicamente
  Object.keys(sections).forEach((section) => {
    const button = document.createElement('button')
    button.classList.add('tab')
    button.setAttribute('data-tab', section)
    button.textContent = section
    tabsContainer.appendChild(button)
  })

  const tabs = document.querySelectorAll('.tab')
  let show = 'Formación' // Sección inicial

  const updateContent = () => {
    content.innerHTML = `${sections[show]()}`
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      show = event.target.getAttribute('data-tab')
      tabs.forEach((t) => t.classList.remove('active'))
      event.target.classList.add('active')
      updateContent()
    })
  })

  // Inicializar con el contenido de la sección inicial
  updateContent()
  document.querySelector(`.tab[data-tab="${show}"]`).classList.add('active')
}
