import { query } from '@javascribble/quantum';
import { enableSelection } from '../controls/selection.js';

export const configureServices = (root) => {
    enableSelection(root, query(root, '#selection'));
};