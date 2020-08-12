import { enableSelection } from '../controls/selection.js';

export const configureServices = root => {
    enableSelection(root, root.querySelector('#selection'), '[selectable]');
};