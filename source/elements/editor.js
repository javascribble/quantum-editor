import { Quantum, define } from '../../references/quantum.js';
import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import { configureServices } from '../application/services.js';
import { editor } from '../templates/editor.js';
import { Layout } from './layout.js';

export class Editor extends Quantum {
    constructor() {
        super(editor);

        const root = this.shadowRoot;
        configureLayout(root);
        configureProject(root);
        configureServices(root);
    }
}

define(Editor);
define(Layout);