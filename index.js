const songClick = document.getElementById('song-click');
const cursor = document.getElementById('cursor');
const btnMenu = document.getElementById('btn-menu');
const btnClose = document.getElementById('btn-close');
const contentContainer = document.getElementById("content");
const menuContainer = document.getElementById("mainmenu");
const menuLinks = menuContainer.querySelectorAll(".mainmenu__link");

btnMenu.addEventListener('click', () => { menuContainer.classList.add('show-menu'); });
btnClose.addEventListener('click', () => { menuContainer.classList.remove('show-menu'); });
menuContainer.addEventListener('click', () => { menuContainer.classList.remove('show-menu'); });

const links = {
  welcome: `
  <div class="face" id="face">
    <img src="assets/images/svg/gear.svg" class="face__gear">
    <div class="face__eye"><div class="face__eyebrow"></div><div id="eye-pupil-left" class="face__eye_pupil"></div></div>
    <div class="face__eye"><div class="face__eyebrow"></div><div id="eye-pupil-right" class="face__eye_pupil"></div></div>
    <div class="face__mouth"><span class="face__mouth_content">Hello</span><span class="face__mouth_content">friend!</span></div>
  </div>
  <a class="start show" href="#about">Start &#10230;</a>`,
  about: `
  <div class="greeting">
    <p>Thank you for visiting my page</p> 
    <p>I am <span>Yury</span></p>
    <p>Frontend developer</p>
    <a href="https://yourunb.github.io/CV/" target="_blank"><img src="./assets/images/avatar.png" alt="Avatar"></a>
  </div>
  <div class="greeting__controls show">
    <a class="greeting__controls_link" href="#projects">Projects</a>
    <a class="greeting__controls_link" href="#contacts">Contacts</a>
  </div>`,
  projects:`
    <h2 class="show">Some of my projects</h2>
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Final Space</p>
        <a href="https://yourunb.github.io/FinalSpace/" target="_blank"><img class="project__description_image" src="assets/images/projects/final-space.jpg" alt="Project image"></a>
          <p><span>Description:</span> React SPA about Final Space movie</p>
          <p><span>Year:</span> 2023</p>
          <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
          <p class="project__description_control"><a href="https://yourunb.github.io/FinalSpace/" target="_blank">Open</a></p>
      </div>
    </div>

    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Free To Play</p>
        <a href="https://yourunb.github.io/Free-To-Play/" target="_blank"><img class="project__description_image" src="assets/images/projects/free-to-play.jpg" alt="Project image"></a>
          <p><span>Description:</span> SPA based on MVC is an application for searching free games</p>
          <p><span>Year:</span> 2023</p>
          <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
          <p class="project__description_control"><a href="https://yourunb.github.io/Free-To-Play/" target="_blank">Open</a></p>
      </div>
    </div>

    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Coffee House</p>
        <a href="https://yourunb.github.io/CoffeeHouse/" target="_blank"><img class="project__description_image" src="assets/images/projects/coffee-house.jpg" alt="Project image"></a>
          <p><span>Description:</span> Web site about coffee and tea</p>
          <p><span>Year:</span> 2023</p>
          <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
          <p class="project__description_control"><a href="https://yourunb.github.io/CoffeeHouse/" target="_blank">Open</a></p>
      </div>
    </div>
  
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Memory Game</p>
        <a href="https://yourunb.github.io/Memory-Game/Memory-Game/" target="_blank"><img class="project__description_image" src="assets/images/projects/memory-game.jpg" alt="Project image"></a>
          <p><span>Description:</span> Games for developing the memory abilities of our brain</p>
          <p><span>Year:</span> 2023</p>
          <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
          <p class="project__description_control"><a href="https://yourunb.github.io/Memory-Game/Memory-Game/" target="_blank">Open</a></p>
      </div>
    </div>
  
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Image Gallery</p>
        <a href="https://yourunb.github.io/Image-Gallery/image-gallery/" target="_blank"><img class="project__description_image" src="assets/images/projects/image-gallery.jpg" alt="Project image"></a>
          <p><span>Description:</span> Applications for viewing images and current photos</p>
          <p><span>Year:</span> 2023</p>
          <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
          <p class="project__description_control"><a href="https://yourunb.github.io/Image-Gallery/image-gallery/" target="_blank">Open</a></p>
      </div>
    </div>
  
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Rick and Morty</p>
        <a href="https://yourunb.github.io/Rick_and_Morty/" target="_blank"><img class="project__description_image" src="assets/images/projects/rick-and-morty.jpg" alt="Project image"></a>
          <p><span>Description:</span> Applications for viewing information about all the characters of the cartoon Rick and Morty</p>
          <p><span>Year:</span> 2023</p>
          <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
          <p class="project__description_control"><a href="https://yourunb.github.io/Rick_and_Morty/" target="_blank">Open</a></p>
      </div>
    </div>
  
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Audio Player</p>
        <a href="https://yourunb.github.io/Audio-Player/" target="_blank"><img class="project__description_image" src="assets/images/projects/audio-player.jpg" alt="Project image"></a>
          <p><span>Description:</span> A simple, stylized audio player</p>
          <p><span>Year:</span> 2023</p>
          <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
          <p class="project__description_control"><a href="https://yourunb.github.io/Audio-Player/" target="_blank">Open</a></p>
      </div>
    </div>

    <div class="project">
    <div class="project__description">
      <p class="project__description_title">Ping Pong</p>
      <a href="https://yourunb.github.io/PingPong/" target="_blank"><img class="project__description_image" src="assets/images/projects/ping-pong.jpg" alt="Project image"></a>
        <p><span>Description:</span> Ping pong game made on canvas</p>
        <p><span>Year:</span> 2023</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description_control"><a href="https://yourunb.github.io/PingPong/" target="_blank">Open</a></p>
    </div>
  </div>
  
  <a href="https://codepen.io/BxYura/pens/public?cursor=ZD0wJm89MSZwPTEmdj02OTkwMDQ0MQ==">...more projects</a>
  `,
  contacts: `
    <h2 class="show">Ready to do something unusual and interesting!</h2>
    <p class="contact">Open to something new. I want to really join an interesting project. Please feel free to email me at any time, I will be glad to cooperate in creating various projects. Thank you dear friend for your attention.</p>
    <p class="contact"><img src="assets/images/svg/mail.svg" alt="Email"><span>Email: </span><a href="mailto:bxyura@gmail.com">BxYura@gmail.com</a></p>
    <p class="contact"><img src="assets/images/svg/in.svg" alt="Linkedin"><span>Linkedin: </span><a href="https://www.linkedin.com/in/yury-butskevich-00b580262/" target="_blank">follow...</a></p>
    <p class="contact"><img src="assets/images/svg/github.svg" alt="Github"><span>Github: </span><a href="https://github.com/YourunB" target="_blank">follow...</a></p>
  `,
};

function updateButtons() {
  const state = location.hash;
  for (let link of menuLinks) {
   state === link.getAttribute("href") ? link.classList.add("active") : link.classList.remove("active");
  }
};

function updateState() {
  let content = links[location.hash.slice(1)];
  contentContainer.innerHTML = content ? content : "<p>Страница не найдена</p>";
  updateButtons();
}

window.addEventListener("hashchange", updateState);
window.addEventListener("click", () => { songClick.play(); })
window.addEventListener("load", (e) => {
  location.hash.slice(1) ? updateState() : location.hash = "#welcome";
});

if (navigator.maxTouchPoints > 0) cursor.classList.add('unvisible');
if (navigator.maxTouchPoints === 0) {
  function mouseMove(e) {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
  }
}

document.addEventListener('mousemove', mouseMove);

window.addEventListener('mousemove', (e) => {
  if (location.hash === '#welcome') {
    let eyePupilLeft = document.getElementById('eye-pupil-left');
    let eyePupilRight = document.getElementById('eye-pupil-right');
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    eyePupilLeft.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    eyePupilRight.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
  }
});
