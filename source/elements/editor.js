import { Component, template, define } from '../import.js';
import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import html from '../templates/editor.js';

export class Editor extends Component {
    static template = template(html);

    constructor() {
        super();

        const windows = this.shadowRoot.querySelectorAll('.window');
        for (const window of windows) {
            window.addEventListener('dragstart', event => event.dataTransfer.setData('id', event.target));
            window.addEventListener('drag', event => {
                //Object.assign(window.style, { top: event.clientY, left: event.clientX });
            });
        }

        this.addEventListener('dragover', event => event.preventDefault());
        this.addEventListener('drop', event => {
            event.preventDefault();
            const id = event.dataTransfer.getData('id');
        });
    }

    slotChangedCallback(slot, addedElements, deletedElements) {
        //configureProject(this.shadowRoot,  );
        //configureLayout(this.shadowRoot, '');
    }
}

define('quantum-editor', Editor);