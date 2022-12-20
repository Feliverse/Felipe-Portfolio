const menuContainer = document.getElementById('mobile-nav');

let controller = false;
menuContainer.addEventListener('click', () => {
  document.querySelector('.desk').style.display = 'flex';
  document.querySelector('.desk').style.background = '#fff';
  document.querySelector('.desk').style.position = 'absolute';
  document.querySelector('.desk').style.width = '100%';
  document.querySelector('.desk').style.height = '100%';
  document.querySelector('.desk').style.top = '0';

  document.getElementById('top-img').style.background = 'url("images/menu_mobile/image_geometry_menu_1.jpg")';
  document.getElementById('top-img').style.position = 'absolute';
  document.getElementById('top-img').style.width = '263px';
  document.getElementById('top-img').style.height = '114px';
  document.getElementById('top-img').style.top = '0';
  document.getElementById('top-img').style.left = '0';
  document.getElementById('top-img').style.zoom = '1.2';

  document.getElementById('bottom-img').style.background = 'url("images/menu_mobile/image_geometry_menu_2.jpg")';
  document.getElementById('bottom-img').style.position = 'absolute';
  document.getElementById('bottom-img').style.width = '100%';
  document.getElementById('bottom-img').style.height = '220px';
  document.getElementById('bottom-img').style.bottom = '0';
  document.getElementById('bottom-img').style.left = '0';

  document.querySelector('.desk ul').style.listStyle = 'none';
  document.querySelectorAll('.menu a').forEach((item) => {
    item.style.textDecoration = 'none';
    item.style.color = 'black';
    item.style.fontWeight = '400px';
    item.style.size = '16px';
    item.style.fontFamily = 'Poppins';
  });

  document.querySelectorAll('.menu li').forEach((item) => {
    item.style.marginBottom = '30px';
  });

  document.querySelector('.desk').style.alignItems = 'center';
  document.querySelector('.desk').style.justifyContent = 'center';

  controller = true;
});

const cancel = document.querySelector('.menu');

const cancela = cancel.querySelectorAll('a');

cancela.forEach((a) => {
  a.addEventListener('click', () => {
    document.querySelector('.desk').style.display = 'none';
  });
});
