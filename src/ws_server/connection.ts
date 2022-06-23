import { WebSocketServer, createWebSocketStream } from 'ws';

import robot from 'robotjs';

import { move_mouse } from '../commands/move.mouse';

export const connection = async (ws: any) => {
    const wsStream = createWebSocketStream(ws, { encoding: "utf-8", decodeStrings: false });
    wsStream.on("data", (chunk) => {
        const [method, ...value] = chunk?.split(' ');
        const { x, y } = robot.getMousePos();
        try {
            if (method !== 'mouse_position') {
                move_mouse(method, x, y, value);
            }
            wsStream.write(`${chunk} ${x},${y} \0`);
        } catch (error) {
            wsStream.write("Invalid command");
        }
    })
}