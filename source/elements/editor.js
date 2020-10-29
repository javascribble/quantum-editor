import { loadJson, saveJson } from '../utilities/storage.js';
import { loadFile, saveFile } from '../utilities/files.js';
import html from '../templates/editor.js';

export class Editor extends quantum.Component {
    constructor() {
        super();

        let project = loadJson('project') || {};

        const engine = this.shadowRoot.querySelector('quantum-engine');
        const input = this.shadowRoot.querySelector('#load');
        const button = this.shadowRoot.querySelector('#save');
        button.onclick = () => saveFile(project);

        const load = options => engine.load(options, Array.from(this.slots.values()).flat());
        input.onchange = event => {
            if (input.files.length > 0) {
                loadFile(input.files[0]).then(file => {
                    load(file);
                });
            }
        };

        load(project);
    }

    static template = quantum.template(html);
}

quantum.define('quantum-editor', Editor);