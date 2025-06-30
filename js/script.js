

function handleHeaderScroll() {
    const header = document.querySelector('.header-transparent');
    if (window.innerWidth > 1080) {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    } else {
      header.classList.remove('scrolled');
    }
  }


window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-transparent');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });



const hamburger = document.getElementById('hamburger-btn');
const navMenu = document.querySelector('#main-nav ul');


hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('open'); 
});
