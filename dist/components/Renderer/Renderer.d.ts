import EMap from "../Canvas/Canvas";
import Item from "../Item/Item";
export default class Renderer {
    private _map;
    constructor(map: EMap);
    render(item: Item): boolean;
    remove(item: Item): boolean;
}
