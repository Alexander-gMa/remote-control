import internal from "stream";

export type MoveMouseType = (method: string, x: number, y: number, value: Array<string>) => void;
export type TakeScreenshotType = (wsStream: internal.Duplex, method: string, x: number, y: number) => void;
export type DrawFigureType = (x: number, y: number, value: Array<string>) => void;