import { Component, template, define } from '../import.js';
import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import html from '../templates/editor.js';

export class Editor extends Component {
    constructor() {
        super();

        configureLayout(this);
    }

    static template = template(html);

    slotChangedCallback(slot, addedElements, deletedElements) {
        configureProject(this, slot.assignedElements()[0]);
    }
}

define('quantum-editor', Editor);