import { Component } from '../../references/quantum.js';
import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import { configureServices } from '../application/services.js';

export class Editor extends Component {
    constructor() {
        super(editor);

        const root = this.shadowRoot;
        configureLayout(root);
        configureProject(root);
        configureServices(root);
    }

    static template = document.querySelector('#quantum-editor');

    static attributes = [];
}

customElements.define('quantum-editor', Editor);