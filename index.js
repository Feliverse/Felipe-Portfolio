
// array for projects information

const projectInfo = [
  {
    id: 1,
    name: 'WanderPal Tours',
    impact: 'Business impact: streamlined reservation workflows and improved booking efficiency for tour management.',
    impactEs: 'Impacto de negocio: optimizacion del flujo de reservas y mejora de la eficiencia operativa en la gestion de tours.',
    description: "In essence, the 'WanderPal Tours' app appears to be a web application that serves as the user interface for booking tours. It is built using React and Vite in the front-end and Ruby on Rails in the back-end. It offers various functionalities, such as logging in, creating reservations, getting reservation details, deleting reservations, and managing items related to the tours. <br> 🛠 Built with React & Redux, Ruby on Rails tested with Jest, styled with Modular CSS",
    descriptionEs: "WanderPal Tours es una aplicacion web para reservar tours. Esta construida con React y Vite en el frontend y Ruby on Rails en el backend. Incluye funcionalidades como iniciar sesion, crear reservas, consultar detalles, eliminar reservas y gestionar informacion de tours. <br> 🛠 Construido con React & Redux, Ruby on Rails, pruebas con Jest y estilos en Modular CSS",
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
    impact: 'Business impact: increased user engagement through mission and reservation flows with real-time interaction.',
    impactEs: 'Impacto de negocio: mayor engagement de usuarios mediante flujos de misiones y reservas con interaccion en tiempo real.',
    description: "Space Travel Hub is a web page developed with React and Redux. On the page, you can reserve a rocket and choose a mission. Was built using React and Redux, tested with Jest, styled with Modular CSS. <br> 🛠 Built with React & Redux, tested with Jest, styled with Modular CSS",
    descriptionEs: "Space Travelers' Hub es una web desarrollada con React y Redux donde puedes reservar un cohete y elegir una mision. Fue construida con React y Redux, probada con Jest y estilizada con Modular CSS. <br> 🛠 Construido con React & Redux, pruebas con Jest y estilos en Modular CSS",
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
    impact: 'Business impact: faster decision-making by centralizing market indicators in a single, intuitive dashboard.',
    impactEs: 'Impacto de negocio: decisiones mas rapidas al centralizar indicadores del mercado en un solo dashboard intuitivo.',
    description: "Metrics Web App is a Forex tool created using React, where you can view the official currencies, cryptocurrencies, majors, and other financial metrics. Enjoy it. <br> 🛠 Built with React & Redux, tested with Jest, styled with Modular CSS",
    descriptionEs: "Metrics Web App es una herramienta financiera creada con React para visualizar monedas oficiales, criptomonedas, pares mayores y otros indicadores del mercado. <br> 🛠 Construido con React & Redux, pruebas con Jest y estilos en Modular CSS",
    image: './images/metrics.png',
    alt: 'laptop',
    technologies: ['API Rest', 'React + Redux', 'Jest Test'],
    liveVersion: 'https://metricswebapp.netlify.app/',
    source: 'https://github.com/Feliverse/MetricsWebApp',
  },
  {
    id: 4,
    name: 'Todo List',
    impact: 'Business impact: better day-to-day execution through a clear and reliable task management workflow.',
    impactEs: 'Impacto de negocio: mejor ejecucion diaria mediante un flujo claro y confiable de gestion de tareas.',
    description: 'To-Do List is a tool created using Webpack where you can register tasks to be done day by day. We can add, delete, and mark tasks as done. was built using HTML, CSS, and Vanilla JavaScript. my first project using Webpack.',
    descriptionEs: 'To-Do List es una herramienta creada con Webpack para registrar tareas diarias, agregarlas, eliminarlas y marcarlas como completadas. Fue construida con HTML, CSS y JavaScript Vanilla, y fue mi primer proyecto con Webpack.',
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
    impact: 'Business impact: stronger community interaction by combining content discovery with likes and comments.',
    impactEs: 'Impacto de negocio: mayor interaccion de comunidad al combinar descubrimiento de contenido con likes y comentarios.',
    description: 'The JavaScript capstone project involves building our web application based on two external APIs. Initially, we retrieve movies and TV series data from the TVmaze API and subsequently record user interactions, such as likes and comments, using the Involvement API.',
    descriptionEs: 'Este proyecto capstone de JavaScript consiste en construir una aplicacion web basada en dos APIs externas. Primero obtenemos datos de peliculas y series desde TVmaze y luego registramos interacciones de usuarios, como likes y comentarios, usando la Involvement API.',
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
    impact: 'Business impact: expanded event reach and credibility with a dynamic, information-rich conference website.',
    impactEs: 'Impacto de negocio: mayor alcance y credibilidad del evento con una web dinamica y rica en informacion.',
    description: "IDTC2023 Industry 4.0 is a conference where people from 20+ countries come together to share experiences about the digital transformation of the industry. The webpage was built using HTML, CSS, and Vanilla JavaScript, and the speakers' section is generated dynamically.",
    descriptionEs: 'IDTC2023 Industry 4.0 es una conferencia donde personas de mas de 20 paises comparten experiencias sobre transformacion digital en la industria. La web fue construida con HTML, CSS y JavaScript Vanilla, y la seccion de speakers se genera de forma dinamica.',
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

const LANGUAGE_KEY = 'preferredLanguage';
let currentLanguage = 'en';

const I18N = {
  en: {
    skipLink: 'Skip to content',
    navHello: 'Hello',
    navPortfolio: 'Portfolio',
    navAbout: 'About',
    navContact: 'Contact',
    heroHeadline: 'I build full-stack software that turns operational complexity into measurable business results.<br><br>As an Industrial Engineer and Full-Stack Developer, I help teams design, build, and scale digital products with clarity, speed, and real impact.',
    heroCta: 'Lets talk about your project',
    projectsTitle: 'Projects',
    aboutTitle: 'About',
    aboutText: 'I am an Industrial Engineer specialized in full-stack software development, combining systems thinking with hands-on technical execution to build products that create real business impact.<br><br>Working with Ruby on Rails on the backend and React on the frontend, I design and deliver scalable, secure, and user-focused digital solutions.<br><br>My engineering background helps me turn complex challenges into clear, efficient workflows, while my product mindset keeps every decision aligned with performance, usability, and growth.<br><br>I bring strong collaboration, clear communication, and a continuous-improvement approach to every project, helping teams ship high-quality software faster and with confidence.',
    aboutCta: 'Get my CV',
    skillsLanguagesTitle: 'Languages',
    skillsFrameworksTitle: 'Libraries & Frameworks',
    skillsToolsTitle: 'Developer tools and Skills',
    contactTitle: 'Get started',
    nameLabel: 'Your name',
    emailLabel: 'Your email',
    emailError: 'Please enter a valid email address.',
    textareaPlaceholder: 'Tell me about your project goals...',
    contactPrivacyNote: 'No spam. Your information is only used to reply to your message.',
    footerResumeCta: 'View my impact-focused resume',
    seeProject: 'View case study',
    modalClose: 'Close dialog',
    modalTech: 'Technologies used',
    modalSeeLive: 'Live demo',
    modalSeeSource: 'Source code',
    modalPrev: 'Previous project',
    modalNext: 'Next project',
    modalSent: 'Message sent',
    modalError: 'Submission error',
    modalCloseBtn: 'Close',
    formSuccess: 'Thank you! Your message has been sent.',
    formHttpError: 'Sorry, there was an error sending your message. Please try again later.',
    formNetworkError: 'Network error. Please check your connection and try again.'
  },
  es: {
    skipLink: 'Saltar al contenido',
    navHello: 'Inicio',
    navPortfolio: 'Portafolio',
    navAbout: 'Sobre mi',
    navContact: 'Contacto',
    heroHeadline: 'Desarrollo software full-stack que convierte complejidad operativa en resultados medibles de negocio.<br><br>Como Ingeniero Industrial y Full-Stack Developer, ayudo a equipos a disenar, construir y escalar productos digitales con claridad, velocidad e impacto real.',
    heroCta: 'Hablemos de tu proyecto',
    projectsTitle: 'Proyectos',
    aboutTitle: 'Sobre mi',
    aboutText: 'Soy Ingeniero Industrial especializado en desarrollo de software full-stack, combinando pensamiento sistemico con ejecucion tecnica para crear productos con impacto real en el negocio.<br><br>Trabajando con Ruby on Rails en backend y React en frontend, diseno y entrego soluciones escalables, seguras y centradas en el usuario.<br><br>Mi enfoque de ingenieria me permite convertir desafios complejos en flujos claros y eficientes, alineando cada decision con rendimiento, usabilidad y crecimiento.<br><br>Aporto colaboracion efectiva, comunicacion clara y mejora continua para ayudar a los equipos a lanzar software de alta calidad con mayor velocidad y confianza.',
    aboutCta: 'Descargar CV',
    skillsLanguagesTitle: 'Lenguajes',
    skillsFrameworksTitle: 'Librerias y Frameworks',
    skillsToolsTitle: 'Herramientas y habilidades',
    contactTitle: 'Comencemos',
    nameLabel: 'Tu nombre',
    emailLabel: 'Tu correo',
    emailError: 'Por favor ingresa un correo valido.',
    textareaPlaceholder: 'Cuentame los objetivos de tu proyecto...',
    contactPrivacyNote: 'Sin spam. Tu informacion solo se usa para responderte.',
    footerResumeCta: 'Ver mi CV orientado a impacto',
    seeProject: 'Ver caso',
    modalClose: 'Cerrar dialogo',
    modalTech: 'Tecnologias utilizadas',
    modalSeeLive: 'Ver demo en vivo',
    modalSeeSource: 'Ver codigo fuente',
    modalPrev: 'Proyecto anterior',
    modalNext: 'Proyecto siguiente',
    modalSent: 'Mensaje enviado',
    modalError: 'Error en el envio',
    modalCloseBtn: 'Cerrar',
    formSuccess: 'Gracias! Tu mensaje fue enviado correctamente.',
    formHttpError: 'Lo siento, hubo un error al enviar tu mensaje. Intenta nuevamente en unos minutos.',
    formNetworkError: 'Error de red. Revisa tu conexion e intenta nuevamente.'
  }
};

function t(key) {
  return I18N[currentLanguage][key] || I18N.en[key] || key;
}

function applyStaticTranslations() {
  const setText = (id, key) => {
    const el = document.getElementById(id);
    if (el) el.textContent = t(key);
  };

  const setHTML = (id, key) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = t(key);
  };

  setText('skipLink', 'skipLink');
  setText('navHello', 'navHello');
  setText('navPortfolio', 'navPortfolio');
  setText('navAbout', 'navAbout');
  setText('navContact', 'navContact');
  setHTML('heroHeadline', 'heroHeadline');
  setText('heroCta', 'heroCta');
  setText('projectsTitle', 'projectsTitle');
  setText('aboutTitle', 'aboutTitle');
  setHTML('aboutText', 'aboutText');
  setText('aboutCta', 'aboutCta');
  setText('skillsLanguagesTitle', 'skillsLanguagesTitle');
  setText('skillsFrameworksTitle', 'skillsFrameworksTitle');
  setText('skillsToolsTitle', 'skillsToolsTitle');
  setText('contactTitle', 'contactTitle');
  setText('nameLabel', 'nameLabel');
  setText('emailLabel', 'emailLabel');
  setText('email-error', 'emailError');
  setText('contactPrivacyNote', 'contactPrivacyNote');
  setText('footerResumeCta', 'footerResumeCta');

  const resumeLink = document.getElementById('footerResumeCta');
  if (resumeLink) {
    const iconImg = resumeLink.querySelector('img');
    resumeLink.textContent = `${t('footerResumeCta')} `;
    if (iconImg) resumeLink.appendChild(iconImg);
  }

  const textArea = document.getElementById('textform');
  if (textArea) textArea.setAttribute('placeholder', t('textareaPlaceholder'));

  document.documentElement.setAttribute('lang', currentLanguage);

  const enBtn = document.getElementById('langEnBtn');
  const esBtn = document.getElementById('langEsBtn');
  if (enBtn && esBtn) {
    enBtn.classList.toggle('active', currentLanguage === 'en');
    esBtn.classList.toggle('active', currentLanguage === 'es');
  }
}

function setLanguage(language) {
  currentLanguage = language === 'es' ? 'es' : 'en';
  try {
    localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  } catch (err) {
    // ignore storage restrictions
  }

  applyStaticTranslations();
  renderProjectCards();
  applyContactCopyVariant();

  const modal = document.getElementById('myModal');
  if (modal && modal.style.display === 'flex') {
    const currentIndex = Number(modal.dataset.currentIndex || 0);
    if (!Number.isNaN(currentIndex)) showModal(currentIndex);
  }
}

function initializeLanguage() {
  let storedLanguage = null;
  try {
    storedLanguage = localStorage.getItem(LANGUAGE_KEY);
  } catch (err) {
    // ignore storage restrictions
  }

  const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
  const initialLanguage = storedLanguage === 'es' || storedLanguage === 'en' ? storedLanguage : browserLanguage;

  const enBtn = document.getElementById('langEnBtn');
  const esBtn = document.getElementById('langEsBtn');
  if (enBtn) enBtn.addEventListener('click', () => setLanguage('en'));
  if (esBtn) esBtn.addEventListener('click', () => setLanguage('es'));

  setLanguage(initialLanguage);
}

function getLocalizedProjectDescription(project) {
  return currentLanguage === 'es' && project.descriptionEs ? project.descriptionEs : project.description;
}

function getLocalizedProjectImpact(project) {
  return currentLanguage === 'es' && project.impactEs ? project.impactEs : project.impact;
}

// project seccion dynamic Html

const showModal = (currentIndex) => {
  const myModal = document.getElementById('myModal');
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
      <button id="closemodalX" class="close-modal close" aria-label="${t('modalClose')}">&times;</button>
      <div class="project-modal-grid">
        <div class="project-header-block">
          <h3 class="project-title-modal" id="proj-modal-title">${project.name}</h3>
          <ul class="card-tech-modal" aria-label="${t('modalTech')}">
            <li>${project.technologies[0] || ''}</li>
            <li>${project.technologies[1] || ''}</li>
            <li>${project.technologies[2] || ''}</li>
          </ul>
        </div>
        <div class="project-media">
          <img class="project-image modal-img" src="${project.image}" alt="${project.alt}">
        </div>
        <div class="project-summary">
          <p class="project-impact">${getLocalizedProjectImpact(project) || ''}</p>
          <p class="project-description" id="proj-modal-description">${getLocalizedProjectDescription(project)}</p>
        </div>
        <div class="btns-modal">
          <a class="btn-modal primary" href="${project.liveVersion}" target="_blank" rel="noopener noreferrer">&#128065; ${t('modalSeeLive')}</a>
          <a class="btn-modal" href="${project.source}" target="_blank" rel="noopener noreferrer">&#128187; ${t('modalSeeSource')}</a>
        </div>
      </div>
      <button class="nav-btn prev-btn" aria-label="${t('modalPrev')}" data-modal-nav="prev" data-target-index="${prevIndex}">&#10096;</button>
      <button class="nav-btn next-btn" aria-label="${t('modalNext')}" data-modal-nav="next" data-target-index="${nextIndex}">&#10097;</button>
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
  const myModal = document.getElementById('myModal');
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

function renderProjectCards() {
  const previousCards = gall.querySelectorAll('.dynamic-project-card');
  previousCards.forEach((card) => card.remove());

  projectInfo.forEach((project, index) => {
    const projectId = project.id;
    const projectName = project.name;
    const projectImage = project.image;
    const projectTech = project.technologies;
    const projectImgAlt = project.alt;

    const soloArticle = document.createElement('article');
    soloArticle.classList.add('card', `card${index + 2}`, 'dynamic-project-card');

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
      <button class="see see-outside myBtn" id="btn${projectId}">${t('seeProject')} &nbsp; →</button>
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
        const currentIndex = projectInfo.findIndex((proj) => proj.id === projectId);
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
}

// single delegated listener for modal close (prevents duplicate listeners)
document.addEventListener('click', (e) => {
  const target = e.target;
  const modal = document.getElementById('myModal');
  if (!modal) return;
  const navButton = target.closest('.nav-btn');
  const modalCta = target.closest('.project-modal .btn-modal');
  if (modal.style.display === 'flex' && modalCta) {
    const projectIndex = Number(modal.dataset.currentIndex || 0);
    const project = projectInfo[projectIndex];
    const ctaType = modalCta.classList.contains('primary') ? 'live_demo' : 'source_code';
    trackLeadEvent('project_modal_cta_click', {
      language: currentLanguage,
      project_name: project ? project.name : 'unknown',
      cta_type: ctaType
    });
  }

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
  const modal = document.getElementById('myModal');
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
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_AB_KEY = 'contactCopyVariant';
let currentContactVariant = 'corporate';

function trackLeadEvent(eventName, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

function applyContactCopyVariant() {
  const valueProposition = document.getElementById('contactValueProposition');
  const channelNote = document.getElementById('contactChannelNote');
  const whatsappBtn = document.getElementById('whatsappLeadBtn');
  const whatsappBtnText = document.getElementById('whatsappLeadBtnText');
  const linkedinNote = document.getElementById('contactLinkedinNote');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const messageField = document.getElementById('textform');

  if (!valueProposition || !channelNote || !whatsappBtn || !whatsappBtnText || !linkedinNote || !submitBtn || !messageField) {
    return;
  }

  const variantsByLanguage = {
    en: {
      corporate: {
        value: 'I help engineering and product teams turn operational complexity into scalable software systems. As an Industrial Engineer specialized in full-stack development, I bridge process optimization, technical delivery, and business outcomes to ship solutions that improve performance and decision-making.',
        note: 'Prefer WhatsApp, the form below, or LinkedIn. I usually reply within 24 hours.',
        whatsappText: 'Discuss your team needs on WhatsApp',
        whatsappHref: 'https://wa.me/59172204904?text=Hi%20Felipe%2C%20we%20want%20to%20improve%20a%20product%20or%20process.%20Can%20we%20talk%3F',
        submit: 'Send project brief',
        placeholder: 'Share your current challenge, goals, and expected timeline...'
      },
      startup: {
        value: 'I partner with founders and fast-moving teams to transform ideas into reliable, high-impact digital products. With an Industrial Engineering mindset and full-stack execution, I focus on building solutions that launch faster, scale smoothly, and support growth from day one.',
        note: 'Quickest way to start: WhatsApp. You can also use the form below or LinkedIn.',
        whatsappText: 'Pitch your idea on WhatsApp',
        whatsappHref: 'https://wa.me/59172204904?text=Hi%20Felipe%2C%20I%20have%20a%20startup%20idea%20and%20want%20to%20build%20it.%20Can%20we%20talk%3F',
        submit: 'Send message',
        placeholder: 'Tell me what you are building and where you need support...'
      }
    },
    es: {
      corporate: {
        value: 'Ayudo a equipos de ingenieria y producto a transformar complejidad operativa en sistemas de software escalables. Como Ingeniero Industrial especializado en desarrollo full-stack, conecto optimizacion de procesos, ejecucion tecnica y resultados de negocio para entregar soluciones que elevan el rendimiento y la toma de decisiones.',
        note: 'Puedes escribirme por WhatsApp, por el formulario o por LinkedIn. Normalmente respondo en menos de 24 horas.',
        whatsappText: 'Conversemos sobre tu equipo por WhatsApp',
        whatsappHref: 'https://wa.me/59172204904?text=Hola%20Felipe%2C%20queremos%20mejorar%20un%20producto%20o%20proceso.%20Podemos%20hablar%3F',
        submit: 'Enviar brief del proyecto',
        placeholder: 'Comparte tu reto actual, objetivos y plazo estimado...'
      },
      startup: {
        value: 'Trabajo con founders y equipos agiles para convertir ideas en productos digitales confiables y de alto impacto. Con mentalidad de Ingenieria Industrial y ejecucion full-stack, construyo soluciones que lanzan mas rapido, escalan mejor y respaldan el crecimiento desde el primer dia.',
        note: 'La forma mas rapida de iniciar es WhatsApp. Tambien puedes usar el formulario o LinkedIn.',
        whatsappText: 'Cuentame tu idea por WhatsApp',
        whatsappHref: 'https://wa.me/59172204904?text=Hola%20Felipe%2C%20tengo%20una%20idea%20de%20startup%20y%20quiero%20desarrollarla.%20Podemos%20hablar%3F',
        submit: 'Enviar mensaje',
        placeholder: 'Cuentame que estas construyendo y en que necesitas apoyo...'
      }
    }
  };

  const queryVariant = new URLSearchParams(window.location.search).get('ab');
  let storedVariant = null;
  try {
    storedVariant = localStorage.getItem(CONTACT_AB_KEY);
  } catch (err) {
    // ignore storage restrictions
  }

  const variantFromQuery = queryVariant === 'corporate' || queryVariant === 'startup' ? queryVariant : null;
  const variantFromStorage = storedVariant === 'corporate' || storedVariant === 'startup' ? storedVariant : null;
  const variantKey = variantFromQuery || variantFromStorage || (Math.random() < 0.5 ? 'corporate' : 'startup');

  try {
    localStorage.setItem(CONTACT_AB_KEY, variantKey);
  } catch (err) {
    // ignore storage restrictions
  }

  const selected = variantsByLanguage[currentLanguage][variantKey];
  valueProposition.textContent = selected.value;
  channelNote.textContent = selected.note;
  whatsappBtnText.textContent = selected.whatsappText;
  whatsappBtn.setAttribute('href', selected.whatsappHref);
  linkedinNote.innerHTML = currentLanguage === 'es'
    ? 'Prefieres LinkedIn? <a href="https://www.linkedin.com/in/haybar/" target="_blank" rel="noopener noreferrer">Conectemos</a>.'
    : 'Prefer LinkedIn? <a href="https://www.linkedin.com/in/haybar/" target="_blank" rel="noopener noreferrer">Let us connect</a>.';
  submitBtn.textContent = selected.submit;
  messageField.setAttribute('placeholder', selected.placeholder);

  currentContactVariant = variantKey;
  trackLeadEvent('contact_variant_view', { variant: variantKey });

  if (whatsappBtn.dataset.trackingBound !== 'true') {
    whatsappBtn.addEventListener('click', () => {
      trackLeadEvent('contact_whatsapp_click', {
        variant: currentContactVariant,
        channel: 'whatsapp'
      });
    });
    whatsappBtn.dataset.trackingBound = 'true';
  }
}

initializeLanguage();

if (email && errorMessage) {
  email.addEventListener('input', () => {
    const current = email.value.trim();
    if (emailRegex.test(current)) {
      errorMessage.style.display = 'none';
      email.style.border = 'none';
    }
  });
}

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
      <button id="closeFormModal" class="close-modal close" aria-label="${t('modalClose')}">&times;</button>
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

    errorMessage.style.display = 'none';
    emailInput.style.border = 'none';

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
        trackLeadEvent('contact_form_submit_success', {
          variant: currentContactVariant,
          channel: 'form'
        });
        // clear local data and form
        localData = { name: '', email: '', message: '' };
        dataLocalStore();
        if (nameInput) nameInput.value = '';
        if (emailInput) emailInput.value = '';
        if (messageInput) messageInput.value = '';
        showFormModal(t('formSuccess'), true);
      } else {
        trackLeadEvent('contact_form_submit_error', {
          variant: currentContactVariant,
          channel: 'form',
          error_type: 'http'
        });
        showFormModal(t('formHttpError'), false);
      }
    } catch (err) {
      trackLeadEvent('contact_form_submit_error', {
        variant: currentContactVariant,
        channel: 'form',
        error_type: 'network'
      });
      showFormModal(t('formNetworkError'), false);
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
  if (typeof window.ScrollReveal !== 'function') {
    return;
  }

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

