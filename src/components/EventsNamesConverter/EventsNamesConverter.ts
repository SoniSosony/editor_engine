import EventsNamesConvertTable from "../../types/EventsNamesConvertTable";

export default class EventsNamesConverter {
    private _convertTable: EventsNamesConvertTable;

    constructor(convertTable: EventsNamesConvertTable) {
        this._convertTable = convertTable;
    }
    
    public convert(eventName: string): string {
        return this._convertTable[eventName];
    }
}
