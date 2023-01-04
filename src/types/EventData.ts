type EventData = {
    name: string;
    originalEvent: object;
    data: object;
};

export default EventData;

export const eventData = (name: string, originalEvent: object, data: object): EventData => {
    return { name, originalEvent, data }
}
