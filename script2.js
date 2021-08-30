const menuSec = document.querySelector(' .menu-section')
const menuBurg = menuSec.querySelector(' .menu-burger')

menuBurg.addEventListener('click', () => {
  menuSec.classList.toggle('show')
})

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    menuSec.classList.remove('show')
  })
}
