import data from '../../data/data'
import './Education.css'

const template = () => {
  return `
    <section class="education" id="education">
      <h1>Formación</h1>
      ${data.education
        .map(
          (edu) => `
        <div class="education-entry">
          <h2>${edu.degree}</h2>
          <h3>${edu.university}</h3>
          <h4>Habilidades y conocimientos</h4>
          <ul>
            ${edu.relevantCourses
              .map(
                (course) => `
              <li>${course}</li>
            `
              )
              .join('')}
          </ul>
        </div>
      `
        )
        .join('')}
    </section>
  `
}

const Education = () => {
  return template()
}

export default Education
