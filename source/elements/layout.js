import { Component, template } from '../../references/quantum.js';
import html from '../templates/layout.js';

export class Layout extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-layout', Layout);