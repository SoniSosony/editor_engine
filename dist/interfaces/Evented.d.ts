import EventData from "../types/EventData";
export default interface Evented {
    on(eventName: string, callback: object): void;
    off(eventName: string, callback: object): void;
    trigger(eventName: string, e: EventData): void;
}
