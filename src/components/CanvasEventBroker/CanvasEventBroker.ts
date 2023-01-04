import Canvas from "../Canvas/Canvas";

export default class CanvasEventBroker {
    private _map: Canvas;
    private _mouseEventsNames = [
        "onclick",
        "oncontextmenu",
        "ondblclick",
        "onmousedown",
        "onmouseenter",
        "onmouseleave",
        "onmousemove",
        "onmouseout",
        "onmouseover",
        "onmouseup",
    ];

    constructor(map: Canvas) {
        this._map = map;
    }

    public on() {}

    public off() {}
}
