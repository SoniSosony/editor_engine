import DrawflowCanvas from "./components/DrawflowCanvas.js";
import Node from "./components/Node.js";

const canvas = new DrawflowCanvas();
canvas.draw();

const renderer = new E.Renderer(canvas);

canvas.on("click", (e) => {
    const { x, y } = canvas.getCoordsFromMouseEvent(e);
    renderer.render(new Node(x, y));
});
