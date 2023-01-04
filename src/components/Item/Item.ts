import Canvas from "../Canvas/Canvas";

export default abstract class Item {
    protected _x: number = 0;
    protected _y: number = 0;
    protected _onMap: boolean = false;
    protected _waitingForRedraw: boolean = false;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get onMap(): boolean {
        return this._onMap;
    }

    get waitingForRedraw(): boolean {
        return this._waitingForRedraw;
    }

    abstract draw(map: Canvas): boolean;

    abstract redraw(map: Canvas): boolean;

    abstract zoomRedraw(map: Canvas): boolean;

    abstract remove(map: Canvas): boolean;
}