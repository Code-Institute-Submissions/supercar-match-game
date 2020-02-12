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



// picking a card function to pick a supercar and it will flip over in the window
function pickCard(windowIndex, w) {
  if (!isinArray(w.id, windowFlippedOver) && !playLockout) {
    if (cardFlipped >= 0) {
      cardFlip(w, windowIndex);
      playLockout = true;
      // check image function to see if a match has been found
      if (checkSrc(windowFlippedOver[windowFlippedOver.length - 1]) == checkSrc(windowFlippedOver[windowFlippedOver.length - 2])) {
        message.innerHTML = "Match Found. Your doing great  Click for more supercars";
        playLockout = false;
        cardFlipped = -1;
        if (windowFlippedOver.length == windowArray.length) {
          gameover();
        }
      }
      else {
        message.innerHTML = "Sorry No Match have another go";
        timer = setInterval(hideCard, 1000);
      }
    }
    else {
      cardFlipped = windowIndex;
      cardFlip(w, windowIndex);
    }
  }
  else {
    message.innerHTML = "sorry Not clickable";
  }
}
