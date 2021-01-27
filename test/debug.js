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

const { Engine, Component, template, define } = quantum;

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
    #ui = document.createElement('quantum-ui');

    constructor() {
        super();

        this.appendChild(this.#ui);
    }

    slotChangedCallback() {
        this.run({
            resourcePath: '/test/resources',
            resources: ['character.png', 'map.png'],
            entities: [2, 3],
            prototypes: [
                [
                    {
                        image: 0,
                        sx: 0,
                        sy: 0,
                        sw: 64,
                        sh: 64
                    },
                    ['image'],
                    [],
                    []
                ],
                [
                    {
                        sheet: 1,
                        size: 64
                    },
                    ['sheet'],
                    [],
                    []
                ],
                [
                    {
                        player: {
                            dx: 100,
                            dy: 100
                        },
                        dw: 64,
                        dh: 64
                    },
                    [],
                    [],
                    [0]
                ],
                [
                    {
                        map: 1,
                        divisor: 4,
                        indices: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    },
                    [],
                    ['map'],
                    []
                ]
            ]
        });
    }

    async initialize(api, options) {
        const importUniformSpritesheet = (image, sw, sh = sw) => {
            const sprites = [];
            for (let row = 0; row < image.height / sh; row++) {
                for (let column = 0; column < image.width / sw; column++) {
                    sprites.push({ image, sx: column * sh, sy: row * sh, sw, sh });
                }
            }

            return sprites;
        };

        api.attachSystem({
            validate: entity => 'map' in entity,
            construct: entity => {
                const { map, indices, divisor } = entity;
                const { sheet, size } = map;

                const tiles = [];
                const sprites = importUniformSpritesheet(sheet, size);
                for (let index = 0; index < indices.length; index++) {
                    const tile = { ...sprites[indices[index]] };
                    tile.dx = tile.sw * (index % divisor);
                    tile.dy = tile.sh * Math.floor(index / divisor);
                    tile.dw = tile.sw;
                    tile.dh = tile.sh;
                    tiles.push(tile);
                }

                entity.tiles = tiles;
            },
            update: (entities, time) => {
                for (const entity of entities) {
                    for (const tile of entity.tiles) {
                        api.drawSprite(tile);
                    }
                }
            }
        });

        api.attachSystem({
            validate: entity => 'player' in entity,
            construct: entity => Object.assign(entity, entity.player),
            update: (entities, time) => {
                for (const entity of entities) {
                    if (api.getButton('ArrowUp')) {
                        entity.dy -= 5;
                    } else if (api.getButton('ArrowDown')) {
                        entity.dy += 5;
                    } else if (api.getButton('ArrowLeft')) {
                        entity.dx -= 5;
                    } else if (api.getButton('ArrowRight')) {
                        entity.dx += 5;
                    }

                    api.drawSprite(entity);
                }
            }
        });

        const entities = await api.loadPrototypes(options.entities);
        entities.forEach(api.attachEntity);
        this.#ui.shadowRoot.querySelector('button').addEventListener('click', event => {
            entities.forEach(api.detachEntity);
            entities.forEach(api.attachEntity);
        });

        return time => {
            api.updateSystems(time);
            return this.isConnected;
        };
    }
});

document.body.style.visibility = 'visible';