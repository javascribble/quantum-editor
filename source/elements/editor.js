import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import editor from '../templates/editor.js';

export class Editor extends Quantum {
}

Editor.define('quantum-editor', editor);

// import 'https://unpkg.com/@javascribble/quantum/bundles/main-window.js';
// import 'https://unpkg.com/@javascribble/quantum-input';
// import 'https://unpkg.com/@javascribble/quantum-canvas';
// import 'https://unpkg.com/@javascribble/quantum-engine';