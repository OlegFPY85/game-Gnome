import {moveGnome} from '../index.js'

describle('Game logic', () => {
    test('Move gnome to new position', () => {
        const initialPosition = currentPosition;
        moveGnome();
        expect(currentPosition).not.toBe(initialPosition);
    })
})