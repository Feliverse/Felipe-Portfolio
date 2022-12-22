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
      item.style.size = '16px';
      item.style.fontFamily = 'Poppins';
      item.style.justifyself = 'center';
    });

    document.querySelectorAll('.menu li').forEach((item) => {
      item.style.marginBottom = '30px';
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

const projectInfo = [
  {
    id: 1,
    name: 'Project name goes here',//to change
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project1.png',// actualiza direcciones 
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript',
    ],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 2,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project2.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 3,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project3.png',
    alt: 'laptop',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 4,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project4.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 5,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project5.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 6,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project6.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
];

const gall = document.querySelector('.gallery')
let cardContainer = `<h2 class="project-title card1">Projects</h2>
                    <div class="caja1-1 card" ></div>`;

projectInfo.map((project, index) => {
  const projectId = project.id;
  const projectName = project.name;
  const projectDescripton = project.description;
  const projectImage = project.image;
  const projectTech = project.technologies;
  const projectLive = project.liveVersion;
  const projectSouce = project.source;
  const projectImgAlt = project.alt;


  cardContainer += 
`<article class="card  card${index +2}">
<img class="imgp" src="${projectImage}" alt="${projectImgAlt}" width="100%">
<div class="pData">
    <h3>${projectName}</h3>
    <ul class="projectUl">
        <li class="projectLi">${projectTech[0]}</li>
        <li class="projectLi">${projectTech[1]}</li>
        <li class="projectLi">${projectTech[2]}</li>
    </ul>
    <button class="see">
        See this project &nbsp →
    </button>
</div>
</article>
<div class="card card-back${index+2}"></div>
`;


})
gall.innerHTML = cardContainer;