import { E } from "../../dist/editor-engine.js";

export default class EDrawflowMap extends E {
    constructor(containerId, { width, height } = { width: "100%", height: "100%" }) {
        super(containerId, { width, height });
    }

    draw() {
        const mapContainer = document.getElementById("map");
        this._source = new Drawflow(mapContainer);
        this._source.start();
    }
}

console.log(E);
