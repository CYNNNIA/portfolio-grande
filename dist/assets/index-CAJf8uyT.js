(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(a){if(a.ep)return;a.ep=!0;const t=s(a);fetch(a.href,t)}})();const o={name:"Cynthia Lorenzo López",address:"Madrid, Spain",email:"cynthialorenzolopez@gmail.com",avatar:"8c5eadb0-fcd2-49d6-8805-326515518d51.jpg",socialLinks:{linkedin:"www.linkedin.com/in/cynthia-lorenzo-lopez-54968823b",github:"github.com/cynthialorenzolopez"},aboutMe:`Soy una persona resolutiva y apasionada por las nuevas tecnologías y la programación. A lo largo de mi carrera, he acumulado una considerable experiencia comercial, lo que me ha permitido desarrollar una visión estratégica y una comprensión profunda del mercado. Además, trabajo muy bien en equipo, colaborando eficazmente con diversos profesionales para alcanzar objetivos comunes.<br><br>

Mi entusiasmo y optimismo me impulsan a crecer continuamente, tanto a nivel profesional como personal. Aunque mi experiencia en algunas áreas no es extensa, tengo una gran determinación y capacidad de aprendizaje. Me encanta enfrentar nuevos desafíos y estoy convencida de que puedo alcanzar y superar cualquier objetivo que se me presente. Mi enfoque innovador y creativo me permite aportar soluciones únicas y efectivas en cada proyecto.<br><br>

Estoy ansiosa por contribuir con mi energía y habilidades a proyectos que marquen la diferencia y me permitan seguir evolucionando en el fascinante mundo de la tecnología. Creo firmemente que mi experiencia comercial, mi capacidad para trabajar en equipo y mi pasión por la tecnología serán valiosas en cualquier emprendimiento. Estoy lista para seguir aprendiendo, creciendo y aportando lo mejor de mí en este emocionante viaje.`,education:[{degree:"Web Development Bootcamp",university:"The Power School",relevantCourses:["HTML","CSS","JAVASCRIPT"]},{degree:"Master en Comunicación, Protocolo y Relaciones Institucionales",university:"UNED",relevantCourses:["HTML","CSS","JAVASCRIPT"]},{degree:"Diplomatura en Relaciones Laborales",university:"Universidad de La Laguna (Tenerife)",relevantCourses:["HTML","CSS","JAVASCRIPT"]}],workExperience:[{position:"Web Developer",company:"Tech Solutions Inc.",startDate:"2021",endDate:"Present",description:"As a key member of the development team, I have contributed to various projects, from creating interactive web applications to optimizing database performance."},{position:"Freelance Web Developer",company:"Self-employed",startDate:"2022",endDate:"2014",description:"During my freelancing period, I collaborated with clients from diverse industries, delivering tailor-made websites that met their unique needs and goals."}],skills:["HTML5","CSS3","JavaScript"],projects:[{title:"E-commerce Website",description:"Diseño y desarrollo de una plataforma de comercio electrónico con múltiples funciones, que incluye búsqueda avanzada de productos,.",link:"https://fluffy-tartufo-8de171.netlify.app",preview:"https://fluffy-tartufo-8de171.netlify.app/assets/Slider_Progresivos_1920x800px_OU_CAST.webp"},{title:"E-commerce Website",description:"Diseño y desarrollo de una tienda en línea de ropa y accesorios de moda, con un diseño moderno y atractivo que refleja la identidad de la marca",link:"https://proyectovanscynthia.netlify.app",preview:"https://proyectovanscynthia.netlify.app/assets/VansBanner.webp"},{title:"Travel Website",description:"Diseño y desarrollo de un sitio web de viajes con una interfaz interactiva y atractiva, que permite a los usuarios explorar destinos y reservar paquetes vacacionales.",link:"https://lovely-mermaid-eb6009.netlify.app",preview:"https://lovely-mermaid-eb6009.netlify.app/T7B92J.webp"}]},p=()=>`
  <header class="sidebar"> 
    <div><h1>Cynthia Lorenzo López</h1>
    <img src="8c5eadb0-fcd2-49d6-8805-326515518d51.jpg" />
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
  `,u=()=>p(),m=()=>`
  <footer>
    <p>©️ Created by Cynthia Lorenzo López</p>
  </footer>
  `,b=()=>m(),h=()=>`
    <section class="aboutme" id="aboutme">
      <h2>Acerca de mi</h2>
      <div class="avatar-container">
        <img class="avatar" src=portfolio-cynn/dist/8c5eadb0-fcd2-49d6-8805-326515518d51.jpg alt=${o.name}/>
        <div class="speech-bubble">Hablemos</div>
      </div>
      <ul>
      ${o.skills.map(e=>`<li>
      <p>${e}</p>
      </li>`).join("")}
    </ul>
      <p>${o.aboutMe}</p>
      <p>${o.address}</p>
      <a href="mailto:${o.email}">Contact me</a>
      <div class="social-links">
    <a href="https://www.linkedin.com/in/cynthia-lorenzo-lopez-54968823b" target="_blank">LinkedIn</a>
    <a href="https://github.com/cynthialorenzolopez" target="_blank">GitHub</a>
  </div>
    </section>
  `,y=()=>h(),v=()=>{const e=document.querySelector(".avatar-container"),i=document.querySelector(".speech-bubble");e&&i&&i.addEventListener("click",()=>{const s=o.email;window.open(`mailto:${s}?subject=${encodeURIComponent("Subject of the Email")}&body=${encodeURIComponent("Body of the Email")}`,"_blank")})},f=()=>`
    <section class="education" id="education">
      <h1>Formación</h1>
      ${o.education.map(e=>`
        <div class="education-entry">
          <h2>${e.degree}</h2>
          <h3>${e.university}</h3>
          <h4>Habilidades y conocimientos</h4>
          <ul>
            ${e.relevantCourses.map(i=>`
              <li>${i}</li>
            `).join("")}
          </ul>
        </div>
      `).join("")}
    </section>
  `,g=()=>f(),$=()=>`
  <section class="experience" id="experience">
    <h1>Experiencia</h1>
    <ul>
      ${o.workExperience.map(e=>`
          <h2>${e.position}</h2>
        <h3>${e.company}</h3>
        <p>${e.startDate} - ${e.endDate}</p>
        <h4>${e.description}</h4>
      `).join("")}
    </ul>
  </section>`,l=()=>$(),L=()=>`
  <section class="projects" id="projects">
    <h1>Proyectos</h1>
    <ul>
      ${o.projects.map(e=>`
      <li>
        <img src=${e.preview} alt=${e.title}/>
        <h3>${e.title}</h3>
        <p>${e.description}</p>
        <a href=${e.link} target="_blank">Ir al sitio Web</a>
      </li>
      `).join("")}
    </ul>
  </section>
  `,S=()=>L(),C=()=>`
    <main>
      ${y()}
      <div class="tabs-container">
        <!-- Botones de pestañas se generarán dinámicamente aquí -->
      </div>
      <div id="content">
        ${l()}
      </div>
      ${S()}
    </main>
  `,q=()=>C(),z=()=>{const e=document.querySelector(".tabs-container"),i=document.querySelector("#content"),s={Formación:g,Experiencia:l};Object.keys(s).forEach(n=>{const r=document.createElement("button");r.classList.add("tab"),r.setAttribute("data-tab",n),r.textContent=n,e.appendChild(r)});const c=document.querySelectorAll(".tab");let a="Formación";const t=()=>{i.innerHTML=`${s[a]()}`};c.forEach(n=>{n.addEventListener("click",r=>{a=r.target.getAttribute("data-tab"),c.forEach(d=>d.classList.remove("active")),r.target.classList.add("active"),t()})}),t(),document.querySelector(`.tab[data-tab="${a}"]`).classList.add("active")},j=()=>{document.querySelector("#app").innerHTML=`
    ${u()}
    ${q()}
    ${b()}
  `};j();v();z();
