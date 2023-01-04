import Point from "../../types/Point";
export default abstract class Canvas {
    private _containerId;
    private _source;
    constructor(containerId: string);
    get source(): any;
    abstract draw(): void;
    abstract on(eventName: string, callback: object): void;
    abstract off(eventName: string, callback: object): void;
    abstract getCoordsFromMouseEvent(mouseEvent: object): Point;
}
