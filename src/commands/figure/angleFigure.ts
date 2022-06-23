import robot, { mouseToggle } from 'robotjs';
export const draw_angle_figure = (x: number, y: number, value: Array<string>) =>{
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
}