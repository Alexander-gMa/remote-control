import robot from 'robotjs';

export const move_mouse = (method: string, x: number, y: number, value: number) => {
    switch (method) {
        case 'mouse_down':
            robot.moveMouse(x, y + +value);
            break;
        case 'mouse_up':
            robot.moveMouse(x, y - +value);
            break;
        case 'mouse_left':
            robot.moveMouse(x - +value, y);
            break;
        case 'mouse_right':
            robot.moveMouse(x + +value, y);
            break;
        case 'draw_circle':
            for (let i = 0; i <= Math.PI * 2; i += 0.05) {
                const newX = x + (value * Math.cos(i));
                const newY = y + (value * Math.sin(i));
                robot.moveMouse(newX, newY);
            }
            break;
        default:
            throw new Error();
    }
}