import Canvas from "../Canvas/Canvas";
import EventsNamesConverter from "../EventsNamesConverter/EventsNamesConverter";
import EventsNamesConvertTable from "../../types/EventsNamesConvertTable";

interface Options {
    useEventsNamesConverter: boolean;
    eventNamesConvertTable: EventsNamesConvertTable;
}

export default class CanvasEventBroker {
    private _canvas: Canvas;
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
    private _mouseEvents = new Map<string, Function[]>();
    private _options: Options;
    private _eventsNamesConverter: EventsNamesConverter;

    constructor(map: Canvas, options: Options) {
        this._options = {
            useEventsNamesConverter: false,
            eventNamesConvertTable: {},
        };
        Object.assign(this._options, options);

        this._canvas = map;

        if (this._options.useEventsNamesConverter) {
            this._eventsNamesConverter = new EventsNamesConverter(this._options.eventNamesConvertTable);
        }
    }

    public on(eventName: string, callback: Function): void {
        const convertedEventName = this._getConvertedEventName(eventName);
        if (this._mouseEventsNames.find((name) => name === eventName) !== undefined) {
            const callbacks = this._mouseEvents.get(convertedEventName);
            if (callbacks) {
                callbacks.push(callback);
            } else {
                this._mouseEvents.set(convertedEventName, [callback]);
                this._canvas.on(convertedEventName, (e: object) => this._callMouseEventCallback(eventName, e));
            }
        }
    }

    public off(eventName: string, callback: Function): void {}

    private _callMouseEventCallback(eventName: string, data: object): void {
        const convertedEventName = this._getConvertedEventName(eventName);
        this._mouseEvents.get(convertedEventName).forEach((callback) => callback(data));
    }

    private _getConvertedEventName(eventName: string): string {
        return this._options.useEventsNamesConverter
        ? this._eventsNamesConverter.convert(eventName)
        : eventName;
    }
 }
