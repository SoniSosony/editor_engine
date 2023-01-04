import Point from "../../types/Point";

export default abstract class Canvas {
    private _containerId: string;
    private _source: any;

    constructor(containerId: string) {
        this._containerId = containerId;
    }

    public get source(): any {
        return this._source;
    }

    abstract draw(): void;

    abstract on(eventName: string, callback: object): void;

    abstract off(eventName: string, callback: object): void;

    abstract getCoordsFromMouseEvent(mouseEvent: object): Point;
}
