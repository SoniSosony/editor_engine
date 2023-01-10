type EventsNamesConvertTable = { [eventName: string]: string }

export default EventsNamesConvertTable;

export const eventsNamesConvertTable = (convertTable: object): EventsNamesConvertTable => {
    const eventsNamesConvertTable: EventsNamesConvertTable = {};
    for (const [key, value] of Object.entries(convertTable)) {
        eventsNamesConvertTable[key] = value;
    }
    return eventsNamesConvertTable;
}