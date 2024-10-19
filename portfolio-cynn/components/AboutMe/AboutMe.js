import data from '../../data/data'
import './AboutMe.css'

const template = () => {
  return `
    <section class="aboutme" id="aboutme">
      <h2>Acerca de mi</h2>
      <div class="avatar-container">
        <img class="avatar" src=portfolio-cynn/dist/8c5eadb0-fcd2-49d6-8805-326515518d51.jpg alt=${
          data.name
        }/>
        <div class="speech-bubble">Hablemos</div>
      </div>
      <ul>
      ${data.skills
        .map(
          (skill) => `<li>
      <p>${skill}</p>
      </li>`
        )
        .join('')}
    </ul>
      <p>${data.aboutMe}</p>
      <p>${data.address}</p>
      <a href="mailto:${data.email}">Contact me</a>
      <div class="social-links">
    <a href="https://www.linkedin.com/in/cynthia-lorenzo-lopez-54968823b" target="_blank">LinkedIn</a>
    <a href="https://github.com/cynthialorenzolopez" target="_blank">GitHub</a>
  </div>
    </section>
  `
}

export const AboutMe = () => {
  return template()
}

export const addAboutListeners = () => {
  const avatarContainer = document.querySelector('.avatar-container')
  const speechBubble = document.querySelector('.speech-bubble')

  if (avatarContainer && speechBubble) {
    speechBubble.addEventListener('click', () => {
      const email = data.email
      const subject = 'Subject of the Email'
      const body = 'Body of the Email'
      window.open(
        `mailto:${email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`,
        '_blank'
      )
    })
  }
}
