import EDrawflowMap from "./components/EDrawflowMap.js";
import Node from "./components/Node.js";

const map = new EDrawflowMap();
map.draw();

const renderer = new E.Renderer(map);
renderer.render(new Node());
