import { saveFile, loadFile } from '../utilities/file.js';

const { getJson, setJson } = quantum;

export const configureProject = editor => {
    const { shadowRoot } = editor;

    shadowRoot.querySelector('#import').onclick = console.log;
    shadowRoot.querySelector('#export').onclick = console.log;
};