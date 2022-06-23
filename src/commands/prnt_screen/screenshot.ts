import robot from "robotjs";
import Jimp from 'jimp';
import { TakeScreenshotType } from "../types";
import { IMG_HEIGHT, IMG_WIDTH } from "../../common/constants";


export const takeScreenshot: TakeScreenshotType = async (wsStream, method, x, y) => {

    const img = robot.screen.capture(x - IMG_WIDTH / 2, y - IMG_HEIGHT / 2, IMG_WIDTH, IMG_HEIGHT);

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

    wsStream.write(`${method} ${base64.split(',')[1]}\0`);
    console.info(`result: ${method}`);
}
