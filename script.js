// Scroll suave al hacer clic en los enlaces del menú
document.querySelectorAll('.top-bar__nav a').forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const topOffset = document.querySelector('.top-bar')?.offsetHeight || 0;
    const rect = target.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    window.scrollTo({
      top: rect.top + scrollTop - topOffset - 12,
      behavior: 'smooth',
    });
  });
});

// Resaltar la sección activa en el menú mientras se hace scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.top-bar__nav a');

function updateActiveLink() {
  let currentId = null;
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const headerHeight = document.querySelector('.top-bar')?.offsetHeight || 0;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const offsetTop = rect.top + scrollPosition - headerHeight - 40;
    if (scrollPosition >= offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    const id = href?.startsWith('#') ? href.slice(1) : null;
    if (id && id === currentId) {
      link.classList.add('is-active');
    } else {
      link.classList.remove('is-active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// Avatar: mostrar imagen si existe, si no dejar iniciales
const avatarImg = document.querySelector('.profile-avatar');
const avatarFallback = document.querySelector('.profile-avatar-fallback');

if (avatarImg && avatarFallback) {
  const showFallback = () => {
    avatarImg.classList.remove('is-loaded');
    avatarImg.style.display = 'none';
    avatarFallback.classList.remove('is-hidden');
  };

  avatarImg.addEventListener('load', () => {
    avatarImg.classList.add('is-loaded');
    avatarImg.style.display = '';
    avatarFallback.classList.add('is-hidden');
  });

  avatarImg.addEventListener('error', showFallback);
}

