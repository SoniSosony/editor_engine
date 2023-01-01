import EMap from "../EMap/EMap";
export default abstract class Item {
    abstract draw(map: EMap): boolean;
    abstract redraw(map: EMap): boolean;
    abstract zoomRedraw(map: EMap): boolean;
    abstract remove(map: EMap): boolean;
}
