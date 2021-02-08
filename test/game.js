import { enableGamePlugin } from './plugins/game.js';
import { enablePlayerPlugin } from './plugins/player.js';
import { enableScenePlugin } from './plugins/scene.js';
import { enableTilePlugin } from './plugins/tile.js';

const Engine = Quantum.types.find(type => type.name === 'Engine');
Engine.plugins.add((api, engine) => {
    enableGamePlugin(api, engine);
    enablePlayerPlugin(api);
    enableScenePlugin(api);
    enableTilePlugin(api);
});

class UI extends Quantum { }

UI.define('quantum-ui', ``);

class Game extends Engine {
    #ui = document.createElement('quantum-ui');

    constructor() {
        super();

        this.appendChild(this.#ui);
    }
}

Game.define('quantum-game');