import { adapters } from '../architecture/api.js';

export class HtmlAdapter extends Set {
    async load(bridge, data) {
    }
}

adapters.set('html', HtmlAdapter);