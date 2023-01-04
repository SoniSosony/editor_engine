import Canvas from "../Canvas/Canvas";
export default class CanvasEventBroker {
    private _map;
    private _mouseEventsNames;
    constructor(map: Canvas);
    on(): void;
    off(): void;
}
