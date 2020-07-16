import { Component, template } from '../../references/quantum.js';
import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import { configureServices } from '../application/services.js';
import html from '../templates/editor.js';

export class Editor extends Component {
    constructor() {
        super(editor);

        const root = this.shadowRoot;
        configureLayout(root);
        configureProject(root);
        configureServices(root);
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-editor', Editor);