import robot from "robotjs";
import Jimp from 'jimp';
import * as stream from "stream";


export const takeScreenshot = async (wsStream: any, method: string, x: number, y: number, width: number, height: number) => {
    const img = robot.screen.capture(x - width / 2, y - height / 2, width, height);

    for (let i = 0; i < img.image.length; i += 1) {
        if (i % 4 === 0) {
            [img.image[i], img.image[i + 2]] = [img.image[i + 2], img.image[i]];
        }
    }

    const image = new Jimp({
        data: img.image,
        width: img.width,
        height: img.height
    });

    const base64 = await image.getBase64Async(image.getMIME())
    wsStream.write(`${method} ${base64.substring(22)}\0`);
}
