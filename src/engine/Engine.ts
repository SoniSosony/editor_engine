import EMap from "../components/Canvas/Canvas";

export default class Engine {
    private map: EMap;

    constructor(map: EMap) {
        this.map = map;
    }

    start(): void {
        this.map.draw();
    }
}
