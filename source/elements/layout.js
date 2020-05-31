import { Quantum } from '@javascribble/quantum';
import { layout } from '../templates/layout.js';

export class Layout extends Quantum {
    constructor() {
        super(layout);
    }
}