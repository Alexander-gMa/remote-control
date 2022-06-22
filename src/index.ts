// import Jimp from 'jimp';
import { httpServer } from './http_server/index';
import robot from 'robotjs';
import { WebSocketServer, createWebSocketStream } from 'ws';
import { move_mouse } from './commands/move.mouse';

const HTTP_PORT = 3000;
const WS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wsServer = new WebSocketServer({ port: WS_PORT });
wsServer.on("listening", () => {
    console.log(`Start WebSocketServer on the ${WS_PORT} port!`)
})

export const connection = async (ws: any) => {
    const wsStream = createWebSocketStream(ws, { encoding: "utf-8" });
    wsStream.on("data", (chunk) => {
        const [method, value] = chunk.split(' ');
        const { x, y } = robot.getMousePos();
        move_mouse(method, x, y, value);
    })
    wsStream.on("error", (err) => {
        console.log(err.message);
    })
}

wsServer.on('connection', connection);
