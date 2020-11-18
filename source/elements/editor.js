import { Component, template, define } from '../import.js';
import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import html from '../templates/editor.js';

export class Editor extends Component {
    static template = template(html);

    constructor() {
        super();

        //configureLayout(this.shadowRoot, '');
    }

    slotChangedCallback(slot, addedElements, deletedElements) {
        //configureProject(this.shadowRoot, );
    }
}

define('quantum-editor', Editor);