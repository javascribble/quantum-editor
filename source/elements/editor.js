import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import editor from '../templates/editor.js';

export class Editor extends Quantum.Extensible {
    constructor(options) {
        super(options, 'editor-preset');

        configureLayout(this);
        configureProject(this);
    }

    attributeChangedCallback(attribute, previousValue, currentValue) {
    }
}

Editor.define('quantum-editor', editor);