import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import editor from '../templates/editor.js';

export class Editor extends Quantum {
}

Editor.define('quantum-editor', editor);

// import 'https://unpkg.com/@javascribble/quantum/bundles/main-window.js';
// import 'https://unpkg.com/@javascribble/quantum-input/bundles/main.js';
// import 'https://unpkg.com/@javascribble/quantum-canvas/bundles/main.js';
// import 'https://unpkg.com/@javascribble/quantum-canvas/bundles/main-extensions.js';
// import 'https://unpkg.com/@javascribble/quantum-engine/bundles/main.js';
// import 'https://unpkg.com/@javascribble/quantum-engine/bundles/main-extensions.js';