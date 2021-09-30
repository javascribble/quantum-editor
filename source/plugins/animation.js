import { plugins } from '../architecture/api.js';

export class AnimationPlugin {
    load(bridge, data) {
    }
}

plugins.set('animation', AnimationPlugin);