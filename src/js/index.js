import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("Hello there! (General Kenobi!) nice to meet you 👾");

fetch("https://api.github.com/users/madara1319/repos")
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector(".projects-grid--js");
    for (let repo of res) {
      const { description, homepage, html_url, name } = repo;
      const template = `<article class="project">
      <div class="project__window">
        <span class="project__circle"></span>
        <span class="project__circle"></span>
        <span class="project__circle"></span>
      </div>
      <div class="project__content">
        <img
          class="project__content--git"
          src="img/github.svg"
          alt=""
        />
        <h3 class="project__grid project__title">
          <span class="project__label">project:</span>${name}
        </h3>
        <p class="project__grid project__grid--description">
          <span class="project__label">description:</span>
          <span>${description}</span>
        </p>
        <p class="project__grid projects-grid--js">
          <span class="project__label">demo:</span>
          <span
            >&lt;<a
            target="_blank"
            rel="noopener noreferrer"
              class="project__link"
              href="${homepage}"
              title="${name} - demo"
              >see-here</a
            >&gt;</span
          >
        </p>
        <p class="project__grid ">
          <span class="project__label">github:</span>
          <span>
            &lt;<a
            target="_blank"
            rel="noopener noreferrer"
              class="project__link"
              href="${html_url}"
              title="${name} - code"
              >source code</a
            >&gt;</span
          >
        </p>
      </div>
    </article>`;
      if (
        (homepage != null) &
        (description != "My personal website") &
        (description != "Garbage website created for learning purposes")
      ) {
        container.innerHTML += template;
      }
    }
  })
  .catch((e) => console.log(e));
