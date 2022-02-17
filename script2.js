const menuSec = document.querySelector(' .menu-section')
const menuBurg = menuSec.querySelector(' .menu-burger')

menuBurg.addEventListener('click', () => {
  menuSec.classList.toggle('show')
})

const links = document.querySelectorAll('nav ul li a', 'main')
for (const link of links) {
  link.addEventListener('click',  () => {
    menuSec.classList.remove('show')
  })
}

