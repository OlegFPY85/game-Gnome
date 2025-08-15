import './style.css';
import gnomeImage from './assets/gnom.png';

const gameBoard = document.getElementById('gameBoard');
const boardSize = 4;
let score = 0;
let currentPosition;
let gameInterval;

const scoreDisplay = document.createElement('div');
scoreDisplay.id = 'score';
scoreDisplay.textContent = `Счёт: ${score}`;
document.body.prepend(scoreDisplay);

function createGameBoard() {
  for (let i = 0; i < boardSize ** 2; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;
    cell.addEventListener('click', handleCellClick);
    gameBoard.append(cell);
  }
}

function createGnome() {
  const gnome = document.createElement('img');
  gnome.src = gnomeImage;
  gnome.className = 'gnome';
  gnome.dataset.type = 'gnome';
  return gnome;
}

function placeGnome() {
  let newPosition;
  do {
    newPosition = Math.floor(Math.random() * boardSize ** 2);
  } while (newPosition === currentPosition);

  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    if (cell.querySelector('.gnome')) {
      cell.innerHTML = '';
    }
  });

  const newCell = document.querySelector(`[data-index="${newPosition}"]`);
  const gnome = createGnome();
  newCell.append(gnome);
  currentPosition = newPosition;
}

function handleCellClick(event) {
  const cell = event.currentTarget;
  if (cell.querySelector('.gnome')) {
    score += 10;
    scoreDisplay.textContent = `Счёт: ${score}`;
    cell.innerHTML = '';
    
    clearInterval(gameInterval);
    placeGnome();
    gameInterval = setInterval(placeGnome, 2000);
  }
}

function initGame() {
  createGameBoard();
  placeGnome();
  gameInterval = setInterval(placeGnome, 2000);
}

document.addEventListener('DOMContentLoaded', initGame); 