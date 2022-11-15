export default abstract class EMap {
    containerId: string;
    width: string;
    height: string;
    constructor(containerId: string, { width, height }?: {
        width: string;
        height: string;
    });
    abstract draw(): void;
}
