import EMap from "../EMap/EMap";
export default abstract class Item {
    private _onMap;
    private _waitingForRedraw;
    get onMap(): boolean;
    get waitingForRedraw(): boolean;
    abstract draw(map: EMap): boolean;
    abstract redraw(map: EMap): boolean;
    abstract zoomRedraw(map: EMap): boolean;
    abstract remove(map: EMap): boolean;
}
