import { Component } from '../../references/quantum.js';

export class Layout extends Component {
    constructor() {
        super();
    }

    static template = document.querySelector('#quantum-layout');

    static attributes = [];
}

customElements.define('quantum-layout', Layout);