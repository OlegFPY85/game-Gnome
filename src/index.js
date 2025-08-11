import gnomeImage from './assets/gnom.png';

// Ожидаем полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const boardSize = 4;
    
    // Создаем игровое поле
    for (let i = 0; i < boardSize ** 2; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        gameBoard.appendChild(cell);
    }

    // Создаем изображение гнома
    const gnome = document.createElement('img');
    gnome.src = gnomeImage;
    gnome.className = 'gnome';
    gnome.alt = 'Gnome character'; // Добавляем alt для доступности

    // Начальная позиция гнома
    let currentPosition = Math.floor(Math.random() * boardSize ** 2);
    document.querySelector(`[data-index="${currentPosition}"]`).appendChild(gnome);

    // Функция перемещения гнома
    function moveGnome() {
        let newPosition;
        do {
            newPosition = Math.floor(Math.random() * boardSize ** 2);
        } while (newPosition === currentPosition);

        const newCell = document.querySelector(`[data-index="${newPosition}"]`);
        
        // Проверяем существование элемента перед добавлением
        if (newCell) {
            newCell.appendChild(gnome);
            currentPosition = newPosition;
        }
    }

    // Запускаем перемещение
    setInterval(moveGnome, 2000);
});