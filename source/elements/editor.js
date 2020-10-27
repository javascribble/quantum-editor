import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import html from '../templates/editor.js';

export class Editor extends quantum.Component {
    #engine;

    constructor() {
        super();

        configureLayout(this.shadowRoot);
        configureProject(this.shadowRoot);

        this.#engine = this.shadowRoot.querySelector('quantum-engine');
    }

    static template = quantum.template(html);

    static get observedAttributes() { return ['src']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        fetch(currentValue).then(options => options.json()).then(this.load.bind(this));
    }

    async load(options) {
        await this.#engine.load(options, Array.from(this.slots.values()).flat());
    }
}

quantum.define('quantum-editor', Editor);