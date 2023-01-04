import Canvas from "../Canvas/Canvas";
export default abstract class Item {
    protected _x: number;
    protected _y: number;
    protected _onMap: boolean;
    protected _waitingForRedraw: boolean;
    constructor(x: number, y: number);
    get onMap(): boolean;
    get waitingForRedraw(): boolean;
    abstract draw(map: Canvas): boolean;
    abstract redraw(map: Canvas): boolean;
    abstract zoomRedraw(map: Canvas): boolean;
    abstract remove(map: Canvas): boolean;
}
