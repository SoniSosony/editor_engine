import EMap from "../EMap/EMap";

export default abstract class Item {
    private _onMap: boolean = false;
    private _waitingForRedraw: boolean = false;

    get onMap(): boolean {
        return this._onMap;
    }

    get waitingForRedraw(): boolean {
        return this._waitingForRedraw;
    }

    abstract draw(map: EMap): boolean;

    abstract redraw(map: EMap): boolean;

    abstract zoomRedraw(map: EMap): boolean;

    abstract remove(map: EMap): boolean;
}