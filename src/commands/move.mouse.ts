import robot, { dragMouse, mouseToggle } from 'robotjs';

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
            mouseToggle('down');
            for (let i = 0; i <= Math.PI * 2; i += 0.06) {
                const newX = x - +value[0] + (+value[0] * Math.cos(i));
                const newY = y + (+value[0] * Math.sin(i));
                robot.moveMouse(newX, newY);
            }
            mouseToggle('up');
            break;
        case 'draw_rectangle':
        case 'draw_square':
            mouseToggle('down');
            for (let i = 0; i <= (+value[0]); i += 4) {
                robot.moveMouse(x + i, y);
            }
            for (let i = 0; i <= (+value[1] || +value[0]); i += 4) {
                robot.moveMouse(x + +value[0], y + i);
            }
            for (let i = 0; i <= +value[0]; i += 4) {
                robot.moveMouse(x + +value[0] - i, y + (+value[1] || +value[0]));
            }
            for (let i = 0; i <= (+value[1] || +value[0]); i += 4) {
                robot.moveMouse(x, y + (+value[1] || +value[0]) - i);
            }
            mouseToggle('up');
            break;
        default:
            throw new Error();
    }
}