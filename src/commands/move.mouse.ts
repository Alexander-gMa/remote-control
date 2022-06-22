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
    }
}