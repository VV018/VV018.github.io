$(document).ready(function () {
    const nav = document.getElementById('navWhole');
    const navL = document.getElementById('navl');
    const foot = document.getElementById('foot');
    const containers = document.getElementById('contz');
    const indCont = document.getElementById('contInd');
    const particles = document.getElementById('particles-js');
  
    if (window.location.pathname === "/index.html") {
        const burger = document.getElementById('burgHome');
      function toggleMenu() {
        burger.addEventListener('click', () => {
          nav.classList.toggle('active');
          burger.classList.toggle('active');
          indCont.classList.toggle('blur');
          foot.classList.toggle('blur');
          navL.classList.toggle('active');
          particles.classList.toggle('blur');
        });
      }
      toggleMenu();
      burger.addEventListener('touchstart', function() {
        toggleMenu();
      });
    }
  
    if (window.location.pathname === "/resume.html") {
      function toggleResumeMenu() {
        const burgResume = document.getElementById('burgRes');
        burgResume.addEventListener('click', () => {
          containers.classList.toggle('blur');
          nav.classList.toggle('active');
          navL.classList.toggle('active');
          burgResume.classList.toggle('active');
          foot.classList.toggle('blur');
          particles.classList.toggle('blur');
        });
      }
      toggleResumeMenu();
    }
  
    if (window.location.pathname === "/photography.html") {
      function togglePhotoMenu() {
        const burgPhoto = document.getElementById('burgPhoto');
        const theContainer = document.getElementById('theCont');
        burgPhoto.addEventListener('click', () => {
          theContainer.classList.toggle('blur');
          nav.classList.toggle('active');
          navL.classList.toggle('active');
          burgPhoto.classList.toggle('active');
          foot.classList.toggle('blur');
          particles.classList.toggle('blur');
        });
      }
      togglePhotoMenu();
    }
  
    if (window.location.pathname === "/about-me.html") {
      function toggleAboutMenu() {
        const burgAbout = document.getElementById('burgAbout');
        const theContainers = document.getElementById('about-all');
        burgAbout.addEventListener('click', () => {
          theContainers.classList.toggle('blur');
          nav.classList.toggle('active');
          navL.classList.toggle('active');
          burgAbout.classList.toggle('active');
          foot.classList.toggle('blur');
          particles.classList.toggle('blur');
          console.log('clicked');
        });
      }
      toggleAboutMenu();
    }
  
    if (window.location.pathname === "/projects.html") {
      function toggleProjectMenu() {
        const burgProject = document.getElementById('burgProject');
        const theConts = document.getElementById('conts');
        burgProject.addEventListener('click', () => {
          theConts.classList.toggle('blur');
          nav.classList.toggle('active');
          navL.classList.toggle('active');
          burgProject.classList.toggle('active');
          foot.classList.toggle('blur');
          particles.classList.toggle('blur');
          console.log('clicked');
        });
      }
      toggleProjectMenu();
    }
  
    function createGallery() {
      const photos = document.querySelectorAll('.photo-container img');
      const modal = document.createElement('div');
      modal.classList.add('modal');
      document.body.appendChild(modal);
  
      photos.forEach(photo => {
        photo.addEventListener('click', () => {
          const imgSrc = photo.src;
          const imgAlt = photo.alt;
          modal.innerHTML = `
          <div class="modal-content">
            <span class="close">&times;</span>
            <h2 class="image-title">${imgAlt}</h2>
            <img src="${imgSrc}" alt="${imgAlt}">
          </div>
        `;
          modal.style.display = 'block';
  
          const closeButton = modal.querySelector('.close');
          closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
          });
          closeButton.addEventListener('mouseenter', () => {
            closeButton.classList.add('spin-clockwise');
          });
  
        });
      });
    }
  
    createGallery();
  
  });
