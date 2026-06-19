const nav = document.getElementById('nav');
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id], div[id]');

    /* 1. Nav scroll */
    function handleScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 60);
      updateActive();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    /* 2. Active link */
    function updateActive() {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 90) current = sec.id;
      });
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }

    /* 3. Hamburger */
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
    });

    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
