
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
      'Javascript'
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
  const isFreshOpen = myModal.style.display !== 'flex';
  myModal.style.display = 'flex';
  myModal.setAttribute('role', 'dialog');
  myModal.setAttribute('aria-modal', 'true');
  myModal.setAttribute('aria-labelledby', 'proj-modal-title');
  myModal.setAttribute('aria-describedby', 'proj-modal-description');
  myModal.setAttribute('aria-hidden', 'false');
  myModal.dataset.currentIndex = String(currentIndex);
  document.body.classList.add('modal-open');
  // remember the element that had focus to restore later
  if (isFreshOpen) {
    myModal.__previouslyFocused = document.activeElement;
  }
  
  const nextIndex = (currentIndex + 1) % projectInfo.length;
  const prevIndex = (currentIndex - 1 + projectInfo.length) % projectInfo.length;

  const project = projectInfo[currentIndex];

  const modalBody = `
    <div class="modal-content project-modal">
      <button id="closemodalX" class="close-modal close" aria-label="Close dialog">&times;</button>
      <div class="project-modal-grid">
        <div class="project-media">
          <img class="project-image modal-img" src="${project.image}" alt="${project.alt}">
        </div>
        <div class="project-body">
          <h3 class="project-title-modal" id="proj-modal-title">${project.name}</h3>
          <ul class="card-tech-modal" aria-label="Technologies used">
            <li>${project.technologies[0] || ''}</li>
            <li>${project.technologies[1] || ''}</li>
            <li>${project.technologies[2] || ''}</li>
          </ul>
          <p class="project-description" id="proj-modal-description">${project.description}</p>
          <div class="btns-modal">
            <a class="btn-modal primary" href="${project.liveVersion}" target="_blank" rel="noopener noreferrer">&#128065; See live</a>
            <a class="btn-modal" href="${project.source}" target="_blank" rel="noopener noreferrer">&#128187; See source</a>
          </div>
        </div>
      </div>
      <button class="nav-btn prev-btn" aria-label="Previous project" data-modal-nav="prev" data-target-index="${prevIndex}">&#10096;</button>
      <button class="nav-btn next-btn" aria-label="Next project" data-modal-nav="next" data-target-index="${nextIndex}">&#10097;</button>
    </div>
  `;
  myModal.innerHTML = modalBody;
  // focus management: focus first focusable element inside modal
  const focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
  const focusable = myModal.querySelectorAll(focusableSelectors);
  if (focusable.length) {
    focusable[0].focus();
  }
};

const gall = document.querySelector('.gallery');

const closeModal = () => {
  const myModal = document.getElementById('myMOdal');
  myModal.style.display = 'none';
  myModal.removeAttribute('role');
  myModal.removeAttribute('aria-modal');
  myModal.removeAttribute('aria-labelledby');
  myModal.removeAttribute('aria-describedby');
  myModal.setAttribute('aria-hidden', 'true');
  delete myModal.dataset.currentIndex;
  document.body.classList.remove('modal-open');
  // restore focus to previous element
  try {
    if (myModal.__previouslyFocused) myModal.__previouslyFocused.focus();
  } catch (err) {
    // ignore
  }
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
    `<div class="card-inner">
      <img class="imgp" src="${projectImage}" alt="${projectImgAlt}" width="100%">
      <div class="pData">
        <h3 id="project-title-${projectId}">${projectName}</h3>
        <ul class="projectUl">
          <li class="projectLi">${projectTech[0]}</li>
          <li class="projectLi">${projectTech[1]}</li>
          <li class="projectLi">${projectTech[2]}</li>
        </ul>
      </div>
    </div>
    <button class="see see-outside myBtn" id="btn${projectId}">See this project &nbsp; →</button>
    </article>`;
  soloArticle.innerHTML = `${cardContainer}`;
  gall.appendChild(soloArticle);
  // make the article keyboard-focusable and accessible
  soloArticle.setAttribute('tabindex', '0');
  soloArticle.setAttribute('role', 'group');
  soloArticle.setAttribute('aria-labelledby', `project-title-${projectId}`);

  const button = document.getElementById(`btn${projectId}`);
  if (button) {
    button.addEventListener('click', () => {
      const currentIndex = projectInfo.findIndex((project) => project.id === projectId);
      showModal(currentIndex);
    });
  }
  // open modal on Enter or Space when card is focused
  soloArticle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (button) button.click();
    }
  });
});

// single delegated listener for modal close (prevents duplicate listeners)
document.addEventListener('click', (e) => {
  const target = e.target;
  const modal = document.getElementById('myMOdal');
  if (!modal) return;
  const navButton = target.closest('.nav-btn');
  if (modal.style.display === 'flex' && navButton) {
    const targetIndex = Number(navButton.dataset.targetIndex);
    if (!Number.isNaN(targetIndex)) {
      showModal(targetIndex);
      return;
    }
  }
  // close when clicking the close button or outside modal-content
  if (target.id === 'closemodalX' || target.closest('#closemodalX')) {
    closeModal();
  } else if (modal.style.display === 'flex' && target === modal) {
    closeModal();
  }
});

// trap focus inside modal and close on Escape
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('myMOdal');
  if (!modal) return;
  if (modal.style.display !== 'flex') return;

  if (e.key === 'Escape') {
    e.preventDefault();
    closeModal();
    return;
  }

  if (e.key === 'Tab') {
    const focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(modal.querySelectorAll(focusableSelectors)).filter((el) => el.offsetParent !== null);
    if (focusable.length === 0) {
      e.preventDefault();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  }
});

// form validation and local storage

const errorMessage = document.querySelector('.error-message');
const form = document.getElementById('contact-form'); // actual <form> element
const email = document.getElementById('email');
const emailRegex = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/;

// handle form submission via fetch and show a confirmation modal instead of navigating away
const formModal = document.getElementById('formModal');

function showFormModal(message, success = true) {
  if (!formModal) return;
  formModal.style.display = 'flex';
  formModal.setAttribute('role', 'dialog');
  formModal.setAttribute('aria-modal', 'true');
  formModal.setAttribute('aria-hidden', 'false');
  formModal.__previouslyFocused = document.activeElement;
  // set class for styling (success / error)
  formModal.classList.remove('success', 'error');
  formModal.classList.add(success ? 'success' : 'error');
  formModal.innerHTML = `
    <div class="modal-content form-modal-card" role="document">
      <button id="closeFormModal" class="close-modal close" aria-label="Close dialog">&times;</button>
      <div class="form-modal-visual ${success ? 'success' : 'error'}" aria-hidden="true">
        ${success ? `
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" opacity="0.12"/>
            <path d="M7 12.5l2.5 2.5L17 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        ` : `
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" opacity="0.12"/>
            <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `}
      </div>
      <h3 class="project-title-modal">${success ? 'Message sent' : 'Submission error'}</h3>
      <p class="project-description">${message}</p>
      <div class="form-modal-actions" style="text-align:center; margin-top:16px;">
        <button id="closeFormModalBtn" class="btn-modal">Close</button>
      </div>
    </div>
  `;
  // focus the close button
  const closeBtn = document.getElementById('closeFormModalBtn') || document.getElementById('closeFormModal');
  if (closeBtn) closeBtn.focus();
}

function closeFormModal() {
  if (!formModal) return;
  formModal.style.display = 'none';
  formModal.removeAttribute('role');
  formModal.removeAttribute('aria-modal');
  formModal.setAttribute('aria-hidden', 'true');
  formModal.classList.remove('success', 'error');
  try { if (formModal.__previouslyFocused) formModal.__previouslyFocused.focus(); } catch (err) {}
}

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameVal = nameInput ? nameInput.value.trim() : '';
    const emailVal = emailInput ? emailInput.value.trim() : '';
    const messageVal = messageInput ? messageInput.value.trim() : '';

    if (!emailRegex.test(emailVal)) {
      errorMessage.style.display = 'block';
      emailInput.style.border = '#dd5353 2px solid';
      return;
    }

    // disable submit button to prevent double sends
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'user-name': nameVal, 'user_email': emailVal, 'user_message': messageVal })
      });

      if (res.ok) {
        // clear local data and form
        localData = { name: '', email: '', message: '' };
        dataLocalStore();
        if (nameInput) nameInput.value = '';
        if (emailInput) emailInput.value = '';
        if (messageInput) messageInput.value = '';
        showFormModal('Thank you! Your message has been sent.', true);
      } else {
        showFormModal('Sorry, there was an error sending your message. Please try again later.', false);
      }
    } catch (err) {
      showFormModal('Network error. Please check your connection and try again.', false);
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

// close handlers for form modal
document.addEventListener('click', (e) => {
  if (e.target.id === 'closeFormModal' || e.target.id === 'closeFormModalBtn') {
    closeFormModal();
  }
  // click outside modal content closes it
  if (e.target === formModal) {
    closeFormModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (!formModal) return;
  if (formModal.style.display === 'flex' && e.key === 'Escape') {
    closeFormModal();
  }
});

// local storage (store under a clear key)
let localData = {
  name: '',
  email: '',
  message: '',
};

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('textform');
const LOCAL_KEY = 'contactFormData';

function dataLocalStore() {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(localData));
}

if (form) {
  form.addEventListener('change', () => {
    localData.name = nameInput.value;
    localData.email = emailInput.value;
    localData.message = messageInput.value;
    dataLocalStore();
  });
}

const saved = JSON.parse(localStorage.getItem(LOCAL_KEY));
if (saved !== null) {
  localData = saved;
  if (nameInput) nameInput.value = localData.name || '';
  if (emailInput) emailInput.value = localData.email || '';
  if (messageInput) messageInput.value = localData.message || '';
}

document.addEventListener('DOMContentLoaded', function () {
  ScrollReveal().reveal('.hello-text', {
    delay: 300,
    distance: '120px',
    origin: 'left',
    duration: 1800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 200
  });

  ScrollReveal().reveal('.card', {
    delay: 300,
    distance: '40px',
    origin: '',
    duration: 400,
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

