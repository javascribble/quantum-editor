import { saveFile, loadFile } from '../utilities/file.js';

const { getJson, setJson } = quantum;

const htmlTemplate = html => `
<html>
    <head>
        <style>
            body {
                visibility: hidden;
                margin: 0;
            }
        </style>
    </head>
    <body>
        <quantum-engine>${html}</quantum-engine>
    </body>
</html>
`;

export const configureProject = editor => {
    const { shadowRoot } = editor;

    shadowRoot.querySelector('#import').onclick = console.log;
    shadowRoot.querySelector('#export').onclick = () => saveFile(htmlTemplate(''));
};