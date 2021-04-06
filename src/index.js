const menuItems = document.querySelectorAll('.main-menu');
const dropMenu = document.querySelectorAll('.drop-menu');

/*


function hide() {
  this.querySelector('ul').setAttribute('display', 'none');
}



menuItems.forEach((item) => {
  item.addEventListener('mouseout', hide);
});
*/
function display() {
  this.querySelector('ul').classList.toggle('visible');
}

menuItems.forEach((item) => {
  item.addEventListener('mouseover', display);
});
