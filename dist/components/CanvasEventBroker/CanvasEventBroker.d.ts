import Canvas from "../Canvas/Canvas";
import EventsNamesConvertTable from "../../types/EventsNamesConvertTable";
interface Options {
    useEventsNamesConverter: boolean;
    eventNamesConvertTable: EventsNamesConvertTable;
}
export default class CanvasEventBroker {
    private _canvas;
    private _mouseEventsNames;
    private _mouseEvents;
    private _options;
    private _eventsNamesConverter;
    constructor(map: Canvas, options: Options);
    on(eventName: string, callback: Function): void;
    off(eventName: string, callback: Function): void;
    private _callMouseEventCallback;
    private _getConvertedEventName;
}
export {};
