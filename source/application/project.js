import { saveFile, loadFile } from '../utilities/files.js';
import { saveJson, loadJson } from '../utilities/json.js';

export const configureProject = (root, plugins) => {
    const load = root.querySelector('#load');
    const save = root.querySelector('#save');
    const project = root.querySelector('#project');

    const configuration = { project: loadJson('project') || {} };
    configuration.save = () => saveJson('project', configuration.project);
    configuration.load = () => engine.run(configuration.project);
    configuration.load();

    project.onchange = () => { };
    save.onclick = () => saveFile(configuration.project);
    load.onchange = () => {
        if (load.files.length > 0) {
            loadFile(load.files[0]).then(file => {
                configuration.project = file;
                configuration.save();
                configuration.load();
            });
        }
    };
};