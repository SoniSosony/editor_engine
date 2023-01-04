import EMap from "../Canvas/Canvas";
import Item from "../Item/Item";

export default class Renderer {
    private _map: EMap;

    constructor(map: EMap) {
        this._map = map;
    }

    render(item: Item): boolean {
        if (!item.onMap) {
            return item.draw(this._map);
        }

        if (item.waitingForRedraw) {
            return item.redraw(this._map);
        }

        return false;
    }

    remove(item: Item): boolean {
        if (!item.onMap) return false;
        return item.remove(this._map);
    }
}
