import EventsNamesConvertTable from "../../types/EventsNamesConvertTable";
export default class EventsNamesConverter {
    private _convertTable;
    constructor(convertTable: EventsNamesConvertTable);
    convert(eventName: string): string;
}
