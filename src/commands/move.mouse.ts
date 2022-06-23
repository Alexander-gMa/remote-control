import robot, { mouseToggle } from 'robotjs';
import { draw_angle_figure } from './figure/angleFigure';
import { draw_circle } from './figure/circle';

export const move_mouse = (method: string, x: number, y: number, value: Array<string>) => {
    switch (method) {
        case 'mouse_down':
            robot.moveMouse(x, y + +value[0]);
            break;
        case 'mouse_up':
            robot.moveMouse(x, y - +value[0]);
            break;
        case 'mouse_left':
            robot.moveMouse(x - +value[0], y);
            break;
        case 'mouse_right':
            robot.moveMouse(x + +value[0], y);
            break;
        case 'draw_circle':
            draw_circle(x, y, value);
            break;
        case 'draw_rectangle':
        case 'draw_square':
            draw_angle_figure(x, y, value);
            break;
        default:
            throw new Error();
    }
}