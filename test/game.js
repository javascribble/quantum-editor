class UI extends Quantum { }

UI.define('quantum-ui', ``);

class Game extends Quantum.Engine {
    #ui = document.createElement('quantum-ui');

    constructor() {
        super();

        this.appendChild(this.#ui);
    }
}

Game.define('quantum-game');