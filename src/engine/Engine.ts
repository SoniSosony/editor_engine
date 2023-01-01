import EMap from "../components/EMap/EMap";

export default class Engine {
    private map: EMap;

    constructor(map: EMap) {
        this.map = map;
    }

    start(): void {
        this.map.draw();
    }
}
