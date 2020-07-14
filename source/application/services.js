import { querySelector } from '../../references/quantum.js';
import { enableSelection } from '../controls/selection.js';

export const configureServices = (root) => {
    enableSelection(root, querySelector(root, '#selection'));
};