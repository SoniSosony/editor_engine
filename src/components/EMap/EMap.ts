export default abstract class EMap {
    private containerId: string;
    private width: string;
    private height: string;
    private _source: any;

    constructor(containerId: string, { width, height }: { width: string; height: string } = { width: "100%", height: "100%" }) {
        this.containerId = containerId;
        this.width = width;
        this.height = height;
    }

    public get source(): any {
        return this._source;
    }

    abstract draw(): void;
}
