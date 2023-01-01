export default abstract class EMap {
    private containerId;
    private width;
    private height;
    private _source;
    constructor(containerId: string, { width, height }?: {
        width: string;
        height: string;
    });
    get source(): any;
    abstract draw(): void;
}
