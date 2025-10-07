const tema = document.getElementById('tema')
const body = document.body

const temasalvo = localStorage.getItem('tema')
darktheme(temasalvo === 'dark')


function darktheme(validate){
    if (validate == true){
        body.classList.add('dark')
        tema.innerHTML = '<i class="fa-solid fa-sun"></i>'
    }else {
        body.classList.remove('dark')
        tema.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
}


tema.addEventListener('click', () => {
    const isdark = body.classList.toggle('dark');
    darktheme(isdark);
    localStorage.setItem('tema', isdark ? 'dark' : 'light')
})


const navLinks = document.querySelectorAll('menu ul a.menu_link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });
});