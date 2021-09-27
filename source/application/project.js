import { saveFile, loadFile } from '../utilities/files.js';
import { exportHtml } from '../constants/html.js';

const { getJson, setJson } = quantum;

export const configureProject = editor => {
    const { shadowRoot } = editor;

    shadowRoot.querySelector('#import').onclick = console.log;
    shadowRoot.querySelector('#export').onclick = () => saveFile(exportHtml('', ''));
};