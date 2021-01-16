import { configureLayout } from '../application/layout.js';
import { configureProject } from '../application/project.js';
import html from '../templates/editor.js';

export class Editor extends Component {
    static template = template(html);
}

define('quantum-editor', Editor);