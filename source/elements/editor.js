import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import html from '../templates/editor.js';

export class Editor extends quantum.Component {
    constructor() {
        super();

        configureLayout(this);
        configureProject(this);
    }

    static template = quantum.template(html);
}

quantum.define('quantum-editor', Editor);