import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import html from '../templates/editor.js';

export class Editor extends quantum.Component {
    constructor() {
        super();

        configureLayout(this);
    }

    static template = quantum.template(html);

    slotChangedCallback(slot, addedElements, deletedElements) {
        configureProject(this, slot.assignedElements());
    }
}

quantum.define('quantum-editor', Editor);