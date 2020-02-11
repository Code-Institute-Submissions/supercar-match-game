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
