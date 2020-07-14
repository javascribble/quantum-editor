import { querySelector } from '../../references/quantum.js';
import { saveJson, loadJson } from './storage.js';

export const configureProject = root => {
    const project = loadJson('project') || [];

    // const tree = querySelector(root, 'quantum-tree');
    // tree.add(project);
};