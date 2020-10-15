var menuOpen = document.getElementById('menu-open')
var menuClose = document.getElementById('menu-close')
var menuMobile = document.getElementById('menu-mobile')

function openMenu() {
  menuOpen.style.display = 'none'
  menuClose.style.display = 'block'
  menuMobile.style.display = 'flex'
}

function closeMenu() {
  menuOpen.style.display = 'block'
  menuClose.style.display = 'none'
  menuMobile.style.display = 'none'
}
