import { httpServer } from './http_server/index';
import { wsServer } from './ws_server';
import { HTTP_PORT, WS_PORT } from './common/constants';

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

wsServer.on("listening", () => {
    console.log(`Start WebSocketServer on the ${WS_PORT} port!`)
})

