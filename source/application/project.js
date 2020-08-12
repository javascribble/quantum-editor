const saveJson = (key, object) => localStorage.setItem(key, JSON.stringify(object));

const loadJson = (key) => localStorage.hasOwnProperty(key) && JSON.parse(localStorage.getItem(key));

export const configureProject = root => {
    const project = loadJson('project') || [];

    const branch = document.createElement('quantum-branch');
    branch.name = "test";

    const tree = root.querySelector('quantum-tree');
    tree.appendChild(branch);
};