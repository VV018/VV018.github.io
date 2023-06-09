$(document).ready(function () {
    const nav = document.getElementById('navWhole');
    const navL = document.getElementById('navl');
    const foot = document.getElementById('foot');
    const containers = document.getElementById('contz');
    const indCont = document.getElementById('contInd');
    const particles = document.getElementById('particles-js');
    console.log("Pathname:" + window.location.pathname);
    if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
      function toggleMenu() {
        const burger = document.getElementById('burgHome');
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
    }
  
    if (window.location.pathname === "/resume.html") {
      function toggleResumeMenu() {
        console.log("Pathname:" + window.location.pathname);
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
        console.log("Pathname:" + window.location.pathname);
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
        console.log("Pathname:" + window.location.pathname);
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
        console.log("Pathname:" + window.location.pathname);
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
