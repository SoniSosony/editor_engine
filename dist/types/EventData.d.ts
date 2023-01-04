declare type EventData = {
    name: string;
    originalEvent: object;
    data: object;
};
export default EventData;
export declare const eventData: (name: string, originalEvent: object, data: object) => EventData;
