class Test extends E.EMap {
    draw() {
        const mapContainer = document.getElementById("map");
        const editor = new Drawflow(mapContainer);
        editor.start();
    
        var html = `
            <div><input type="text" df-name></div>
        `;
        var data = { name: "" };
    
        editor.addNode("github", 0, 1, 150, 300, "github", data, html, false);
    }
}

const engine = new E.Engine(new Test);
engine.start();
