import fs from 'fs'
import http from 'http'
import path from 'path'

export const httpServer = http.createServer((req, res) => {

    const __dirname = path.resolve(path.dirname(''));

    const file_path = __dirname + (req.url === '/' ?
        '/front/index.html' :
        '/front' + req.url);
    try {
        const readStream = fs.createReadStream(file_path);
        res.writeHead(200);
        readStream.pipe(res);
        readStream.on('error', (err) => {
            res.writeHead(404);
            res.end(JSON.stringify(err));
        }
        )
    } catch (error) {
        res.writeHead(404);
        res.end(JSON.stringify(error));
    }
})
