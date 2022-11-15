export default abstract class EMap {
    containerId: string;
    width: string;
    height: string;

    constructor(containerId: string, { width, height }: { width: string; height: string } = { width: "100%", height: "100%" }) {
        this.containerId = containerId;
        this.width = width;
        this.height = height;
    }

    abstract draw(): void;
}
