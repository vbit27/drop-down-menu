const menuItems = document.querySelectorAll('.main-menu');
const dropMenu = document.querySelectorAll('.drop-menu');

function toggleClass() {
  this.querySelector('ul').classList.toggle('hi');
}

menuItems.forEach((item) => {
  item.addEventListener('mouseover', toggleClass);
});

menuItems.forEach((item) => {
  item.addEventListener('mouseout', toggleClass);
});

console.log(menuItems);
console.log(dropMenu);
