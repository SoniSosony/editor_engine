export default class DrawflowCanvas extends E.Canvas {
    constructor(containerId, { width, height } = { width: "100%", height: "100%" }) {
        super(containerId, { width, height });
    }

    draw() {
        const mapContainer = document.getElementById("map");
        this._source = new Drawflow(mapContainer);
        this._source.start();
    }

    on(eventName, callback) {
        this._source.on(eventName, callback);
    }

    off(eventName, callback) {
        this._source.removeListener(eventName, callback);
    }

    getCoordsFromMouseEvent(mouseEvent) {
        const x =
            mouseEvent.clientX * (this._source.precanvas.clientWidth / (this._source.precanvas.clientWidth * this._source.zoom)) -
            this._source.precanvas.getBoundingClientRect().x *
                (this._source.precanvas.clientWidth / (this._source.precanvas.clientWidth * this._source.zoom));

        const y =
            mouseEvent.clientY *
                (this._source.precanvas.clientHeight / (this._source.precanvas.clientHeight * this._source.zoom)) -
            this._source.precanvas.getBoundingClientRect().y *
                (this._source.precanvas.clientHeight / (this._source.precanvas.clientHeight * this._source.zoom));

        return E.Point(x, y);
    }
}
