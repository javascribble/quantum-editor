import { saveJson, loadJson } from '../utilities/storage.js';
import { saveFile, loadFile } from '../utilities/files.js';

export const configureProject = editor => {
    const root = editor.shadowRoot;
    const engine = root.querySelector('quantum-engine');
    const loadInput = root.querySelector('#load');
    const saveInput = root.querySelector('#save');

    const project = { data: loadJson('project') || {} };
    project.save = () => saveJson('project', project.data)
    project.load = () => engine.load(project.data, Array.from(editor.slots.values()).flat());
    project.load();

    saveInput.onclick = () => saveFile(project.data);
    loadInput.onchange = () => {
        if (loadInput.files.length > 0) {
            loadFile(loadInput.files[0]).then(file => {
                project.data = file;
                project.save();
                project.load();
            });
        }
    };

    editor.project = project;
};