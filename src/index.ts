// import Jimp from 'jimp';
import { httpServer } from './http_server/index';
// import robot from 'robotjs';
import { WebSocketServer } from 'ws';

const HTTP_PORT = 3000;
const WS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wsServer = new WebSocketServer({ port: WS_PORT });
wsServer.on("listening", () => {
    console.log(`Start WebSocketServer on the ${WS_PORT} port!`)
})