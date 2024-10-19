import data from '../../data/data'
import './Experience.css'

const template = () => {
  return `
  <section class="experience" id="experience">
    <h1>Experiencia</h1>
    <ul>
      ${data.workExperience
        .map(
          (item) => `
          <h2>${item.position}</h2>
        <h3>${item.company}</h3>
        <p>${item.startDate} - ${item.endDate}</p>
        <h4>${item.description}</h4>
      `
        )
        .join('')}
    </ul>
  </section>`
}

const Experience = () => {
  return template()
}

export default Experience
