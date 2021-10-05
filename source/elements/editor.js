import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import editor from '../templates/editor.js';

export class Editor extends Quantum.Engine {
    constructor(options) {
        super(options, 'editor-preset');

        configureLayout(this);
        configureProject(this);
    }
}

Editor.define('quantum-editor', editor);