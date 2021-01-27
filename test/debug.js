import '/node_modules/@javascribble/quantum/source/main.js';
import '/node_modules/@javascribble/quantum-tabs/source/main.js';
import '/node_modules/@javascribble/quantum-layout/source/main.js';
import '/node_modules/@javascribble/quantum-region/source/main.js';
import '/node_modules/@javascribble/quantum-canvas/source/main.js';
import '/node_modules/@javascribble/quantum-input/source/main.js';
import '/node_modules/@javascribble/quantum-context/source/main.js';
import '/node_modules/@javascribble/quantum-tree/source/main.js';
import '/node_modules/@javascribble/quantum-engine/source/main.js';
import '/source/main.js';

const { Engine, Component, template, define, load } = quantum;

define('quantum-ui', class UI extends Component {
    static template = template(`
        <style>
            button {
                position: absolute;
                top: 0;
                right: 0; 
            }
        </style>
        <button>reset</button>
    `);
});

define('quantum-game', class Game extends Engine {
    constructor() {
        super();

        this.appendChild(document.createElement('quantum-ui'));
    }

    async run() {
        return await super.run(await load('/test/game.json'));
    }

    async initialize(api, options) {
        return (await import('/test/game.js')).default(this, api, options);
    }
});

document.body.style.visibility = 'visible';