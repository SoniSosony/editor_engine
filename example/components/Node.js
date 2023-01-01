export default class Node extends E.Item {
    draw(map) {
        const html = `
            <div><input type="text" df-name></div>
        `;
        const data = { name: "" };

        map.source.addNode("github", 0, 1, 150, 300, "github", data, html, false);
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
