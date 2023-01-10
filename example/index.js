import DrawflowCanvas from "./components/DrawflowCanvas.js";
import Node from "./components/Node.js";

const canvas = new DrawflowCanvas();
canvas.draw();

const renderer = new E.Renderer(canvas);

const convertTable = {
    onclick: "click",
};

const canvasEventBroker = new E.CanvasEventBroker(canvas, {
    useEventsNamesConverter: true,
    eventNamesConvertTable: convertTable,
});

canvasEventBroker.on("onclick", (e) => {
    console.log(e);
    // const { x, y } = canvas.getCoordsFromMouseEvent(e);
    // renderer.render(new Node(x, y));
});

// canvas.on("click", (e) => {
//     const { x, y } = canvas.getCoordsFromMouseEvent(e);
//     renderer.render(new Node(x, y));
// });
