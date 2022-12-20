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
