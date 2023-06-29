// Add custom JavaScript here
function useScroll () {
  const navbar = document.querySelector('.navbar')
  const navbarNavDropdown = document.getElementById('navbarNavDropdown')
  const btn = document.querySelector('.navbar-toggler')

  // btn.addEventListener('click',() => navbar.classList.toggle('bg-dark'))

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark')
      navbar.classList.add('navbar-sticky')
    } else {
      navbar.classList.remove('bg-dark')
      navbar.classList.remove('navbar-sticky')
    }
  })
}

document.addEventListener('DOMContentLoaded',useScroll)
