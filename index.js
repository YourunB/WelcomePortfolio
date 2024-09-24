const songClick = document.getElementById('song-click');
const cursor = document.getElementById('cursor');
const btnMenu = document.getElementById('btn-menu');
const btnClose = document.getElementById('btn-close');
const contentContainer = document.getElementById('content');
const menuContainer = document.getElementById('mainmenu');
const menuLinks = menuContainer.querySelectorAll('.mainmenu__link');

btnMenu.addEventListener('click', () => {
  menuContainer.classList.add('show-menu');
});
btnClose.addEventListener('click', () => {
  menuContainer.classList.remove('show-menu');
});
menuContainer.addEventListener('click', () => {
  menuContainer.classList.remove('show-menu');
});

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
    <a class="greeting__controls__link" href="#projects">Projects</a>
    <a class="greeting__controls__link" href="#contacts">Contacts</a>
  </div>`,
  projects: `
    <h2 class="show">Some of my projects</h2>
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Graph/Rest Client</p>
        <a href="https://graphiql-app-theta.vercel.app/en" target="_blank"><img class="project__description__image" src="assets/images/projects/graph.jpg" alt="Project image"></a>
        <p><span>Description:</span> Graph/Rest Client created on Next</p>
        <p><span>Year:</span> 2024</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://graphiql-app-theta.vercel.app/en" target="_blank">Open</a></p>
      </div>
    </div>
    
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Disney Characters React App</p>
        <a href="https://yourunb.github.io/disney-charcters-redux-RTK/" target="_blank"><img class="project__description__image" src="assets/images/projects/disney.jpg" alt="Project image"></a>
        <p><span>Description:</span> React SPA with Disney API</p>
        <p><span>Year:</span> 2024</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/disney-charcters-redux-RTK/" target="_blank">Open</a></p>
      </div>
    </div>
    
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Puzzle Game</p>
        <a href="https://rolling-scopes-school.github.io/yourunb-JSFE2023Q4/rss-puzzle/" target="_blank"><img class="project__description__image" src="assets/images/projects/puzzle.jpg" alt="Project image"></a>
        <p><span>Description:</span> Puzzle Game - Learn English Fun</p>
        <p><span>Year:</span> 2024</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://rolling-scopes-school.github.io/yourunb-JSFE2023Q4/rss-puzzle/" target="_blank">Open</a></p>
      </div>
    </div>
    
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Nonograms Game</p>
        <a href="https://yourunb.github.io/Nonograms-Game/" target="_blank"><img class="project__description__image" src="assets/images/projects/nonograms.jpg" alt="Project image"></a>
        <p><span>Description:</span> Japanese Crosswords - logic puzzles</p>
        <p><span>Year:</span> 2024</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/Nonograms-Game/" target="_blank">Open</a></p>
      </div>
    </div>
    
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Rick and Morty React App</p>
        <a href="https://yourunb.github.io/Rick-and-Morty-on-React/" target="_blank"><img class="project__description__image" src="assets/images/projects/rick-morty-react.jpg" alt="Project image"></a>
        <p><span>Description:</span> React SPA about Rick and Morty movie characters</p>
        <p><span>Year:</span> 2024</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/Rick-and-Morty-on-React/" target="_blank">Open</a></p>
      </div>
    </div>

    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Chat</p>
        <a href="https://rolling-scopes-school.github.io/yourunb-JSFE2023Q4/fun-chat/" target="_blank"><img class="project__description__image" src="assets/images/projects/chat.jpg" alt="Project image"></a>
        <p><span>Description:</span> chat for communication on webSocket. <a href="https://github.com/YourunB/fun-chat-server" target="_blank" class="project__description__link">Open API</a> for work App</p>
        <p><span>Year:</span> 2024</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://rolling-scopes-school.github.io/yourunb-JSFE2023Q4/fun-chat/" target="_blank">Open</a></p>
      </div>
    </div>

    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Async Race</p>
        <a href="https://rolling-scopes-school.github.io/yourunb-JSFE2023Q4/async-race/" target="_blank"><img class="project__description__image" src="assets/images/projects/race.jpg" alt="Project image"></a>
        <p><span>Description:</span> car racing, asynchronous programming. <a href="https://github.com/YourunB/async-race-api" target="_blank" class="project__description__link">Open API</a> for work App</p>
        <p><span>Year:</span> 2024</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://rolling-scopes-school.github.io/yourunb-JSFE2023Q4/async-race/" target="_blank">Open</a></p>
      </div>
    </div>
    
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Hangman Game</p>
        <a href="https://yourunb.github.io/Hangman-Game/" target="_blank"><img class="project__description__image" src="assets/images/projects/hangman-game.jpg" alt="Project image"></a>
        <p><span>Description:</span> A bright and exciting quiz game - hangman</p>
        <p><span>Year:</span> 2024</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/Hangman-Game/" target="_blank">Open</a></p>
      </div>
    </div>

    <div class="project">
      <div class="project__description">
        <p class="project__description_title">News Portal</p>
        <a href="https://rolling-scopes-school.github.io/yourunb-JSFE2023Q4/news-api/" target="_blank"><img class="project__description__image" src="assets/images/projects/news-portal.jpg" alt="Project image"></a>
        <p><span>Description:</span> TypeScript App with news sources</p>
        <p><span>Year:</span> 2024</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://rolling-scopes-school.github.io/yourunb-JSFE2023Q4/news-api/" target="_blank">Open</a></p>
      </div>
    </div>

    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Kapibara Lab</p>
        <a href="https://yourunb.github.io/company-projects/" target="_blank"><img class="project__description__image" src="assets/images/projects/company-projects.jpg" alt="Project image"></a>
        <p><span>Description:</span> Landing for comapy projects</p>
        <p><span>Year:</span> 2024</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/company-projects/" target="_blank">Open</a></p>
      </div>
    </div>

    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Company projects</p>
        <a href="https://yourunb.github.io/kapibara-lab/" target="_blank"><img class="project__description__image" src="assets/images/projects/kapibara.jpg" alt="Project image"></a>
        <p><span>Description:</span> Reat App about kapibara labaratory</p>
        <p><span>Year:</span> 2024</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/kapibara-lab/" target="_blank">Open</a></p>
      </div>
    </div>

    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Plant Shop</p>
        <a href="https://rolling-scopes-school.github.io/yourunb-JSFE2023Q4/ecommerce/" target="_blank"><img class="project__description__image" src="assets/images/projects/ecommerce.jpg" alt="Project image"></a>
        <p><span>Description:</span> Teamwork on Github with API Commerce Tools.</p>
        <p><span>Year:</span> 2024</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://rolling-scopes-school.github.io/yourunb-JSFE2023Q4/ecommerce/" target="_blank">Open</a></p>
      </div>
    </div>
    
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Final Space React App</p>
        <a href="https://yourunb.github.io/FinalSpace/" target="_blank"><img class="project__description__image" src="assets/images/projects/final-space.jpg" alt="Project image"></a>
        <p><span>Description:</span> React SPA about Final Space movie</p>
        <p><span>Year:</span> 2023</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/FinalSpace/" target="_blank">Open</a></p>
      </div>
    </div>

    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Free To Play</p>
        <a href="https://yourunb.github.io/Free-To-Play/" target="_blank"><img class="project__description__image" src="assets/images/projects/free-to-play.jpg" alt="Project image"></a>
        <p><span>Description:</span> SPA based on MVC is an application for searching free games</p>
        <p><span>Year:</span> 2023</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/Free-To-Play/" target="_blank">Open</a></p>
      </div>
    </div>

    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Coffee House</p>
        <a href="https://yourunb.github.io/CoffeeHouse/" target="_blank"><img class="project__description__image" src="assets/images/projects/coffee-house.jpg" alt="Project image"></a>
        <p><span>Description:</span> Web site about coffee and tea</p>
        <p><span>Year:</span> 2023</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/CoffeeHouse/" target="_blank">Open</a></p>
      </div>
    </div>
  
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Memory Game</p>
        <a href="https://yourunb.github.io/Memory-Game/Memory-Game/" target="_blank"><img class="project__description__image" src="assets/images/projects/memory-game.jpg" alt="Project image"></a>
        <p><span>Description:</span> Games for developing the memory abilities of our brain</p>
        <p><span>Year:</span> 2023</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/Memory-Game/Memory-Game/" target="_blank">Open</a></p>
      </div>
    </div>
  
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Image Gallery</p>
        <a href="https://yourunb.github.io/Image-Gallery/image-gallery/" target="_blank"><img class="project__description__image" src="assets/images/projects/image-gallery.jpg" alt="Project image"></a>
        <p><span>Description:</span> Applications for viewing images and current photos</p>
        <p><span>Year:</span> 2023</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/Image-Gallery/image-gallery/" target="_blank">Open</a></p>
      </div>
    </div>
  
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Rick and Morty</p>
        <a href="https://yourunb.github.io/Rick_and_Morty/" target="_blank"><img class="project__description__image" src="assets/images/projects/rick-and-morty.jpg" alt="Project image"></a>
        <p><span>Description:</span> App about characters of Rick and Morty</p>
        <p><span>Year:</span> 2023</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/Rick_and_Morty/" target="_blank">Open</a></p>
      </div>
    </div>

    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Brooklyn Public Library</p>
        <a href="https://yourunb.github.io/NYC-Library/" target="_blank"><img class="project__description__image" src="assets/images/projects/library.jpg" alt="Project image"></a>
        <p><span>Description:</span> The library website is based on a layout from Figma</p>
        <p><span>Year:</span> 2023</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/NYC-Library/" target="_blank">Open</a></p>
      </div>
    </div>
  
    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Audio Player</p>
        <a href="https://yourunb.github.io/Audio-Player/" target="_blank"><img class="project__description__image" src="assets/images/projects/audio-player.jpg" alt="Project image"></a>
        <p><span>Description:</span> A simple, stylized audio player</p>
        <p><span>Year:</span> 2023</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/Audio-Player/" target="_blank">Open</a></p>
      </div>
    </div>

    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Stretch Ceilings</p>
        <a href="https://yourunb.github.io/First_project-stretch_ceilings/" target="_blank"><img class="project__description__image" src="assets/images/projects/ceiling.jpg" alt="Project image"></a>
        <p><span>Description:</span> Website about stretch ceilings</p>
        <p><span>Year:</span> 2023</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/First_project-stretch_ceilings/" target="_blank">Open</a></p>
      </div>
    </div>

    <div class="project">
      <div class="project__description">
        <p class="project__description_title">Ping Pong</p>
        <a href="https://yourunb.github.io/PingPong/" target="_blank"><img class="project__description__image" src="assets/images/projects/ping-pong.jpg" alt="Project image"></a>
        <p><span>Description:</span> Ping pong game made on canvas</p>
        <p><span>Year:</span> 2023</p>
        <p><span>Developer:</span> <a href="https://yourunb.github.io/CV/">Yury Butskevich</a></p>
        <p class="project__description__control"><a href="https://yourunb.github.io/PingPong/" target="_blank">Open</a></p>
    </div>
  </div>
  
  <a class="more-project" href="https://codepen.io/BxYura/pens/public?cursor=ZD0wJm89MSZwPTEmdj02OTkwMDQ0MQ==">...more projects</a>
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
    state === link.getAttribute('href') ? link.classList.add('active') : link.classList.remove('active');
  }
}

function updateState() {
  let content = links[location.hash.slice(1)];
  contentContainer.innerHTML = content ? content : '<p>Page no found ...</p>';
  updateButtons();
}

window.addEventListener('hashchange', updateState);
window.addEventListener('click', () => {
  songClick.play();
});
window.addEventListener('load', (e) => {
  location.hash.slice(1) ? updateState() : (location.hash = '#welcome');
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
