import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import { configureServices } from '../application/services.js';
import html from '../templates/editor.js';

export class Editor extends quantum.Component {
    constructor() {
        super();

        configureLayout(this.shadowRoot);
        configureProject(this.shadowRoot);
        configureServices(this.shadowRoot);
    }

    static template = quantum.template(html);
}

quantum.define('quantum-editor', Editor);