import './style.css'
import Header from './portfolio-cynn/components/Header/Header'
import Footer from './portfolio-cynn/components/Footer/Footer'
import { Main, addMainListeners } from './portfolio-cynn/components/Main/Main'
import { addAboutListeners } from './portfolio-cynn/components/AboutMe/AboutMe'

const render = () => {
  document.querySelector('#app').innerHTML = `
    ${Header()}
    ${Main()}
    ${Footer()}
  `
}

render()
addAboutListeners()
addMainListeners()
