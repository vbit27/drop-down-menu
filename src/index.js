const menuItems = document.querySelectorAll('.main-menu');
const dropMenu = document.querySelectorAll('.drop-menu');

function display() {
  this.querySelector('ul').setAttribute('display', 'flex');
}

function hide() {
  this.querySelector('ul').setAttribute('display', 'none');
}

menuItems.forEach((item) => {
  item.addEventListener('mouseover', display);
});

menuItems.forEach((item) => {
  item.addEventListener('mouseout', hide);
});
