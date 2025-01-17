import robot, { mouseToggle } from 'robotjs';
import { DrawFigureType } from '../types';

export const draw_circle: DrawFigureType = (x, y, value) => {
    mouseToggle('down');
    for (let i = 0; i <= Math.PI * 2; i += 0.06) {
        const newX = x - +value[0] + (+value[0] * Math.cos(i));
        const newY = y + (+value[0] * Math.sin(i));
        robot.moveMouse(newX, newY);
    }
    mouseToggle('up');
}