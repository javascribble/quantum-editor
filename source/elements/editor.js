import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import html from '../templates/editor.js';

export class Editor extends quantum.Engine {
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
        fetch(currentValue).then(options => options.json()).then(this.integrate.bind(this));
    }

    async integrate(options) {
        await this.#engine.integrate(options);
    }
}

quantum.define('quantum-editor', Editor);