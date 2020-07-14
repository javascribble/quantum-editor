const resources = [
    '/node_modules/@javascribble/quantum-tree/source/templates/tree.html',
    '/node_modules/@javascribble/quantum-canvas/source/templates/canvas.html',
    '/node_modules/@javascribble/quantum-engine/source/templates/engine.html',
    '/source/templates/editor.html'
];

Promise.all(resources.map(resource => fetch(resource).then(response => response.text().then(html => document.body.insertAdjacentHTML('beforeend', html)))));