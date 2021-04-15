// Game container function
function initGame() {
  const gameScreen = document.querySelector('#game-screen');
  const ctx = gameScreen.getContext('2d');

  const spritesheet = new Image();
  spritesheet.src = './assets/spritesheet.png';

  // Draw behaviours
  function draw() {
    ctx.clearRect(0, 0, gameScreen.width, gameScreen.height);

    ctx.drawImage(spritesheet, 0, 0);
  }

  // Update behaviours
  function update() {
    requestAnimationFrame(update);
  }

  // Init statement
  function init() {
    draw();
    update();
  }

  // Return as object for the instance
  return {
    init
  };
}

const game = initGame();

// Make sure that DOM is available
window.addEventListener('load', game.init);