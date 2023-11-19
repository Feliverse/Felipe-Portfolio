
// array for projects information

const projectInfo = [
  {
    id: 1,
    name: 'WanderPal Tours',
    description: "In essence, the 'WanderPal Tours' app appears to be a web application that serves as the user interface for booking tours. It is built using React and Vite in the front-end and Ruby on Rails in the back-end. It offers various functionalities, such as logging in, creating reservations, getting reservation details, deleting reservations, and managing items related to the tours. <br> 🛠 Built with React & Redux, Ruby on Rails tested with Jest, styled with Modular CSS",
    image: './images/wanderpal.png',
    alt: 'laptop',
    technologies: [
      'React & Redux',
      'Ruby on Rails',
    ],
    liveVersion: 'https://fancy-toffee-1b590d.netlify.app',
    source: 'https://github.com/danielamoreno699/wanderpal-frontend',
  },
  {
    id: 6,
    name: "Space Travelers' Hub",
    description: "Space Travel Hub is a web page developed with React and Redux. On the page, you can reserve a rocket and choose a mission. Was built using React and Redux, tested with Jest, styled with Modular CSS. <br> 🛠 Built with React & Redux, tested with Jest, styled with Modular CSS",
    image: './images/space.png',
    alt: 'laptop',
    technologies: [
      'React + Redux',
      'Javascript',
      'API Rest'],
    liveVersion: 'https://steady-croquembouche-5dbbee.netlify.app',
    source: 'https://github.com/Feliverse/Space-travel-Hub',
  },
  {
    id: 3,
    name: 'Forex - MetricsWebApp',
    description: "Metrics Web App is a Forex tool created using React, where you can view the official currencies, cryptocurrencies, majors, and other financial metrics. Enjoy it. <br> 🛠 Built with React & Redux, tested with Jest, styled with Modular CSS",
    image: './images/metrics.png',
    alt: 'laptop',
    technologies: ['API Rest', 'React + Redux', 'Jest Test'],
    liveVersion: 'https://metricswebapp.netlify.app/',
    source: 'https://github.com/Feliverse/MetricsWebApp',
  },
  {
    id: 4,
    name: 'Todo List',
    description: 'To-Do List is a tool created using Webpack where you can register tasks to be done day by day. We can add, delete, and mark tasks as done. was built using HTML, CSS, and Vanilla JavaScript. my first project using Webpack.',
    image: './images/Todo list.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: 'https://feliverse.github.io/To-Do-List/dist/',
    source: 'https://github.com/Feliverse/To-Do-List',
  },
  {
    id: 5,
    name: "Today's Movies and Series",
    description: 'The JavaScript capstone project involves building our web application based on two external APIs. Initially, we retrieve movies and TV series data from the TVmaze API and subsequently record user interactions, such as likes and comments, using the Involvement API.',
    image: './images/movies.png',
    alt: 'laptop',
    technologies: [
      'React&Redux',
      'API Rest',
      'Javascript'],
    liveVersion: 'https://feliverse.github.io/JavaScript-Capston-Project/dist/',
    source: 'https://github.com/miltonHenschel/JavaScript-Capston-Project',
  },
  {
    id: 2,
    name: 'Conference Page',
    description: "IDTC2023 Industry 4.0 is a conference where people from 20+ countries come together to share experiences about the digital transformation of the industry. The webpage was built using HTML, CSS, and Vanilla JavaScript, and the speakers' section is generated dynamically.",
    image: './images/conference.png',
    alt: 'laptop',
    technologies: [
      'HTML',
      'CSS',
      'Javascript'],
    liveVersion: 'https://feliverse.github.io/conference-page/',
    source: 'https://github.com/Feliverse/conference-page',
  },
];

// project seccion dynamic Html

const showModal = (currentIndex) => {
  const myModal = document.getElementById('myMOdal');
  myModal.style.display = 'flex';
  
  const nextIndex = (currentIndex + 1) % projectInfo.length;
  const prevIndex = (currentIndex - 1 + projectInfo.length) % projectInfo.length;

  const project = projectInfo[currentIndex];

  const modalBody = `
    <div class="modal-content">
      <button id="closemodalX" class="close-modal close">&times;</button>
      <h3 class="project-title-modal">${project.name}</h3>
      <ul class="card-tech-modal">
        <li>${project.technologies[0]}</li>
        <li>${project.technologies[1]}</li>
        <li>${project.technologies[2]}</li>
      </ul>
      <div class="flex flex-row">
      <button class="prev-btn" onclick="showModal(${prevIndex})"> &#10096;</button>
        <div>
          <img class="project-image modal-img" src="${project.image}" alt="${project.alt}">
          <p class="project-description">${project.description}</p>
        </div>      
        <div class="btns-modal">
          <a href="${project.liveVersion}" target="_blank">
            <button class="btn-modal seeLive">&#9965; See live </button>
          </a>
          <a href="${project.source}" target="_blank">
            <button class="btn-modal seeSource">&#11027; See source </button>
          </a>
        </div>
        <button class="prev-btn" onclick="showModal(${nextIndex})">&#10097;</button>
      </div>
      <div class="next-prev-proj">
        
        
      </div>
    </div>
  `;
  myModal.innerHTML = modalBody;
};

const gall = document.querySelector('.gallery');

const closeModal = () => {
  const myModal = document.getElementById('myMOdal');
  myModal.style.display = 'none';
};

projectInfo.forEach((project, index) => {
  const projectId = project.id;
  const projectName = project.name;
  const projectImage = project.image;
  const projectTech = project.technologies;
  const projectImgAlt = project.alt;

  const soloArticle = document.createElement('article');
  soloArticle.classList.add('card', `card${index + 2}`);

  const cardContainer =
    `<img class="imgp" src="${projectImage}" alt="${projectImgAlt}" width="100%">
      <div class="pData">
        <h3>${projectName}</h3>
        <ul class="projectUl">
          <li class="projectLi">${projectTech[0]}</li>
          <li class="projectLi">${projectTech[1]}</li>
          <li class="projectLi">${projectTech[2]}</li>
        </ul>
        <button class="see myBtn" id="btn${projectId}">
          See this project &nbsp →
        </button>
      </div>
    </article>`;
  soloArticle.innerHTML = `${cardContainer}`;
  gall.appendChild(soloArticle);
  const button = document.getElementById(`btn${projectId}`);
  button.addEventListener('click', () => {
    const currentIndex = projectInfo.findIndex((project) => project.id === projectId);
    showModal(currentIndex);
    const closemodalX = document.getElementById('closemodalX');
    closemodalX.addEventListener('click', () => {
      closeModal();
    });
  });
});

// form validation

const errorMessage = document.querySelector('.error-message');
const form = document.getElementById('contact');
const email = document.getElementById('email');
const emailRegex = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/;

form.addEventListener('submit', (e) => {
  if (!emailRegex.test(email.value)) {
    e.preventDefault();
    errorMessage.style.display = 'block';
    email.style.border = '#dd5353 2px solid';
  }
});
// local storage

let localData = {
  name: '',
  email: '',
  message: '',
};

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('textform');

function dataLocalStore() {
  localStorage.setItem('name', JSON.stringify(localData));
}

form.addEventListener('change', () => {
  localData.name = nameInput.value;
  localData.email = emailInput.value;
  localData.message = messageInput.value;
  dataLocalStore();
});

if (JSON.parse(localStorage.getItem('name')) !== null) {
  localData = JSON.parse(localStorage.getItem('name'));
  nameInput.setAttribute('value', localData.name);
  emailInput.setAttribute('value', localData.email);
  messageInput.value = localData.message;
}

document.addEventListener('DOMContentLoaded', function () {
  ScrollReveal().reveal('.hello-text', {
    delay: 300,
    distance: '120px',
    origin: 'left',
    duration: 800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 200
  });

  ScrollReveal().reveal('.card', {
    delay: 300,
    distance: '40px',
    origin: '',
    duration: 800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 200
  });



  ScrollReveal().reveal('.formulary', {
    delay: 300,
    distance: '20px',
    origin: 'bottom',
    duration: 800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 200
  });

  ScrollReveal().reveal('.bigimage', {
    delay: 300,
    distance: '120px',
    origin: 'right',
    duration: 800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 200
  });
});

