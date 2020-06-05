import { query } from '@javascribble/quantum';
import { saveJson, loadJson } from './storage.js';

export const configureProject = root => {
    const project = loadJson('project') || [];

    // const tree = query(root, 'quantum-tree');
    // tree.add(project);
};