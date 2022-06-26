import { createWebSocketStream, WebSocket } from 'ws';

import robot from 'robotjs';

import { move_mouse } from '../commands/move.mouse';
import { takeScreenshot } from '../commands/prnt_screen/screenshot';

export const connection = async (ws: WebSocket) => {
    const wsStream = createWebSocketStream(ws, { encoding: "utf-8", decodeStrings: false });
    wsStream.on("data", async (chunk) => {
        const [method, ...value] = chunk?.split(' ');
        const { x, y } = robot.getMousePos();
        try {
            if (method === 'prnt_scrn') {
                await takeScreenshot(wsStream, method, x, y)
                return;
            }
            if (method !== 'mouse_position') {
                move_mouse(method, x, y, value);
            }
            wsStream.write(`${chunk} ${x},${y} \0`);
            console.info(`result: ${chunk}`);
        } catch (error) {
            wsStream.write("Invalid command");
        }
    });
    ws.on('close', () => {
        console.info('User logged out!')
        wsStream.destroy();
    })
}