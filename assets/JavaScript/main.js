// container for images
var windowImages = []; 
var windowArray = [];
var windowFlippedOver = [];
var cardFlipped = -1;
var timer = '';
var playLockout = false;
var gamePlay = false;
// to begin the game
var runButton = document.getElementById('run'); 
var layOut = document.getElementById('layout');
var message = document.getElementById('message');

//event listens
runButton.addEventListener('click', runGame); 
function runGame() {
    cardFlipped = -1;
    playLockout = false;
    runButton.style.display = 'none';
    if (!gamePlay) {
        gamePlay = true;
        buildArray();
        windowArray = windowImages.concat(windowImages);
        shuffleArray(windowArray);
        buildBoard();
        message.innerHTML = "Click any window";
    }
}


function buildArray() {
  for (var x = 1; x < 21; x++) {
    windowImages.push(x + '.jpg');
  }
}

// game windows built using green image back with question mark
function buildBoard() {
  var html = "";
  for (var x = 0; x <= (windowArray.length - 1); x++) {
    html += '<div class="layOut"><div class="layOut">'; 
    html += '<img id="' + x + '" src="images/back 3.jpg" onclick="pickCard(' + x + ',this)" class="flipImage"></div></div>';
  }
  layout.innerHTML = html;
}