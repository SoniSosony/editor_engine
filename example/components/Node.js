import {E} from "../../dist/editor-engine.js";

export default class Node extends E.Item {
    draw(map) {
        
    }

    redraw(map) {
        return true;
    }
    
    zoomRedraw(map) {
        return true;
    }
    
    remove(map) {
        return true;
    }
}
