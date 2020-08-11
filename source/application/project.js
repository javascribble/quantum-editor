const saveJson = (key, object) => localStorage.setItem(key, JSON.stringify(object));

const loadJson = (key) => localStorage.hasOwnProperty(key) && JSON.parse(localStorage.getItem(key));

export const configureProject = root => {
    const project = loadJson('project') || [];

    // const tree = querySelector(root, 'quantum-tree');
    // tree.add(project);
};