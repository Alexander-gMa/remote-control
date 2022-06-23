import { WebSocketServer } from 'ws';
import { connection } from './connection';
import { WS_PORT } from '../common/constants';

export const wsServer = new WebSocketServer({ port: WS_PORT });

wsServer.on('connection', connection);