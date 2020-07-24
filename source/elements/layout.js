import html from '../templates/layout.js';

export class Layout extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-layout', Layout);