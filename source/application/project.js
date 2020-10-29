import { saveFile, loadFile } from '../utilities/files.js';
import { saveJson, loadJson } from '../utilities/json.js';

export const configureProject = (editor, plugins) => {
    const root = editor.shadowRoot;
    const engine = root.querySelector('quantum-engine');
    const loadInput = root.querySelector('#load');
    const saveInput = root.querySelector('#save');

    const configuration = { project: loadJson('project') || {} };
    configuration.save = () => saveJson('project', configuration.project);
    configuration.load = () => engine.load(configuration.project, plugins);
    configuration.load();

    saveInput.onclick = () => saveFile(configuration.project);
    loadInput.onchange = () => {
        if (loadInput.files.length > 0) {
            loadFile(loadInput.files[0]).then(file => {
                configuration.project = file;
                configuration.save();
                configuration.load();
            });
        }
    };

    Object.assign(editor, configuration);
};