// mobile menu

const menuContainer = document.getElementById('toolbar');
const iconImage = menuContainer.querySelector('img');
let controller = false;

menuContainer.addEventListener('click', () => {
  if (!controller) {
    document.querySelector('.desk').style.display = 'flex';
    document.querySelector('.desk').style.background = '#fff';
    document.querySelector('.desk').style.position = 'absolute';
    document.querySelector('.desk').style.width = '100%';
    document.querySelector('.desk').style.height = '100vh';
    document.querySelector('.desk').style.top = '0px';
    document.querySelector('.desk').style.position = 'fixed';

    document.getElementById('toolbar').style.zIndex = '2';

    document.getElementById('top-img').style.background = 'url("images/menu_mobile/image_geometry_menu_1.jpg")';
    document.getElementById('top-img').style.position = 'absolute';
    document.getElementById('top-img').style.width = '70vw';
    document.getElementById('top-img').style.height = '30vh';
    document.getElementById('top-img').style.top = '0px';
    document.getElementById('top-img').style.left = '0';
    document.getElementById('top-img').style.backgroundSize = '100%';
    document.getElementById('top-img').style.backgroundRepeat = 'no-repeat';

    document.getElementById('bottom-img').style.background = 'url("images/menu_mobile/image_geometry_menu_2.jpg")';
    document.getElementById('bottom-img').style.position = 'absolute';
    document.getElementById('bottom-img').style.width = '100vw';
    document.getElementById('bottom-img').style.height = '220px';
    document.getElementById('bottom-img').style.bottom = '0';
    document.getElementById('bottom-img').style.backgroundSize = '100%';
    document.getElementById('bottom-img').style.backgroundRepeat = 'no-repeat';

    document.querySelector('.desk ul').style.listStyle = 'none';
    document.querySelector('.desk ul').style.display = 'flex';
    document.querySelector('.desk ul').style.flexDirection = 'column';
    document.querySelector('.desk ul').style.alignItems = 'center';
    document.querySelectorAll('.menu a').forEach((item) => {
      item.style.textDecoration = 'none';
      item.style.color = 'black';
      item.style.fontWeight = '400px';
      item.style.size = '2rem';
      item.style.fontFamily = 'Poppins';
      item.style.justifyself = 'center';
    });

    document.querySelectorAll('.menu li').forEach((item) => {
      item.style.marginBottom = '4rem';
    });

    document.querySelector('.desk').style.paddingTop = '50%';
    document.querySelector('.desk').style.justifyContent = 'center';
    iconImage.src = 'images/cancel.jpg';

    controller = true;
  } else {
    iconImage.src = 'images/ic_menu.svg';
    document.querySelector('.desk').style.display = 'none';
    controller = false;
  }
});

const cancel = document.querySelector('.menu');
const cancela = cancel.querySelectorAll('a');

cancela.forEach((a) => {
  a.addEventListener('click', () => {
    controller = false;
    document.querySelector('.desk').style.display = 'none';
    iconImage.src = 'images/ic_menu.svg';
  });
});

// array for projects information

const projectInfo = [
  {
    id: 1,
    name: 'Bookstore new collection',
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
    liveVersion: '#',
    source: 'https://github.com/Feliverse/Space-travel-Hub',
  },
  {
    id: 3,
    name: 'Forex - MetricsWebApp',
    description: 'Metrics Web App is a tool created using React where you can view the official currencies, cryptocurrencies, majors and other financial metrics. Enjoy it. <br> 🛠 Built With React & Redux, tested with Jest, styled in Modular CSS',
    image: './images/metrics.png',
    alt: 'laptop',
    technologies: ['Jest Test', 'React + Redux', 'API Rest'],
    liveVersion: '#',
    source: '#',
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
    name: 'Math Magicians',
    description: '**Math Magicians** is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
    image: './images/math.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'React',
      'Javascript'],
    liveVersion: '#',
    source: '#',
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
