
const mobileNavButton = document.getElementById('mobile-nav-button');
const mobileMenu = document.getElementById('mobile-menu');
const topImg = document.getElementById('top-img');
const bottomImg = document.getElementById('bottom-img');
const nav = document.querySelector('nav');

mobileNavButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.style.display = 'grid';
        mobileMenu.style.background = '#fff';
        mobileMenu.style.justifyItems = 'center';
        mobileMenu.style.width = '110%';
        mobileMenu.style.height = '93vh';
        mobileMenu.style.alignItems = 'center';
        mobileMenu.style.alignContent = 'center';
        mobileMenu.style.gap = '3rem';

        // Mostrar las imágenes cuando se abre el menú
        topImg.style.background = 'url("images/menu_mobile/image_geometry_menu_1.jpg")';
        topImg.style.display = 'block';
        topImg.style.position = 'absolute';
        topImg.style.width = '70vw';
        topImg.style.height = '30vh';
        topImg.style.top = '0px';
        topImg.style.left = '0';
        topImg.style.backgroundSize = '100%';
        topImg.style.backgroundRepeat = 'no-repeat';

        bottomImg.style.background = 'url("images/menu_mobile/image_geometry_menu_2.jpg")';
        bottomImg.style.display = 'block';
        bottomImg.style.position = 'absolute';
        bottomImg.style.width = '100vw';
        bottomImg.style.height = '220px';
        bottomImg.style.bottom = '0';
        bottomImg.style.backgroundSize = '100%';
        bottomImg.style.backgroundRepeat = 'no-repeat';
        nav.style.zIndex = '100';

        nav.style.backgroundColor = 'white';
    } else {
        mobileMenu.style.backgroundColor = '';
        mobileMenu.style.display = 'none';

        // Ocultar las imágenes cuando se cierra el menú
        topImg.style.display = 'none';
        bottomImg.style.display = 'none';
        nav.style.backgroundColor = '';
    }
});

const closeMobileMenu = () => {
  mobileMenu.classList.add('hidden');
  mobileMenu.style.backgroundColor = '';
  topImg.style.display = 'none';
  bottomImg.style.display = 'none';
  nav.style.backgroundColor = '';
};

const menuLinks = mobileMenu.querySelectorAll('a');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Cierra el menú al hacer clic en un enlace
    closeMobileMenu();
  });
});

// array for projects information

const projectInfo = [
  {
    id: 1,
    name: 'WanderPal Tours',
    description: "In essence, the 'WanderPal Tours' app appears to be a web application that serves as the user interface for booking tours. It is built using React and Vite in the Front-end and Ruby on Rails in the Back-end, and it offers various functionalities like logging in, creating reservations, getting reservation details, deleting reservations, and managing items related to the tours",
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
    id: 2,
    name: "Space Travelers' Hub",
    description: "Space Travel Hub's is a Web page developed with React and Redux, in the page you can reserve a rocket and choise a mission.",
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
    description: 'Metrics Web App is a Forex tool created using React where you can view the official currencies, cryptocurrencies, majors and other financial metrics. Enjoy it. <br> 🛠 Built With React & Redux, tested with Jest, styled in Modular CSS',
    image: './images/metrics.png',
    alt: 'laptop',
    technologies: ['API Rest', 'React + Redux', 'Jest Test'],
    liveVersion: 'https://metricswebapp.netlify.app/',
    source: 'https://github.com/Feliverse/MetricsWebApp',
  },
  {
    id: 4,
    name: 'Todo List',
    description: 'To Do List, is a tool created using webpack where you register tasks to do day by day',
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
    description: 'The JavaScript capstone project is about building our own web application based on two external APIs. First, we retrieve movies and TV Series from the TVmaze API and then record user interactions (likes and comments) using the Involvement API.',
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
    id: 6,
    name: 'Conference Page',
    description: 'IDTC2023 Industry 4.0 is a Conference date where people from 20+ countries share experiences about the digital transformation of the industry, The page was built using HTML - CSS & Vanilla JavaScript, and the speakers section is created dynamically.',
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
      <img class="project-image modal-img" src="${project.image}" alt="${project.alt}">
      <p class="project-description">${project.description}</p>
      <div class="btns-modal">
        <a href="${project.liveVersion}" target="_blank">
          <button class="btn-modal seeLive">See live</button>
        </a>
        <a href="${project.source}" target="_blank">
          <button class="btn-modal seeSource">See source</button>
        </a>
      </div>
      <div class="next-prev-proj">
        <button class="prev-btn" onclick="showModal(${prevIndex})"> &larr; Previous project</button>
        <button class="prev-btn" onclick="showModal(${nextIndex})">Next Project &rarr;</button>
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
