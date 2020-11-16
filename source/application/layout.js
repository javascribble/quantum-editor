import { saveStyles, loadStyles } from '../storage/styles.js';
import { clamp } from '../import.js';

const observables = new Map();

const resizeObserver = new ResizeObserver(entries => {
    for (const { target } of entries) {
        const observable = observables.get(target.id);
        if (observable.timeout) {
            clearTimeout(observable.timeout);
        }

        const update = () => saveStyles(target, observable.properties);
        observable.timeout = setTimeout(update, 1000);
    }
});

const persistResize = (element, properties, defaults) => {
    loadStyles(element, properties, defaults);
    observables.set(element.id, { properties });
    resizeObserver.observe(element);
};

const enableScaling = (element, target, factor = 1.2) => {
    let scale = 1;
    const applyScale = event => {
        target.style.transform = `scale(${scale = clamp(event.deltaY < 0 ? scale * factor : scale / factor, 0, 2)})`;
        //target.style.transformOrigin = "50% 50% 0px";
    };

    element.addEventListener('wheel', applyScale, { passive: true });
};

const enablePanning = (element, target) => {
};

export const configureLayout = editor => {
    const root = editor.shadowRoot;
    enableScaling(root.querySelector('#viewport'), root.querySelector('#engine'));
    persistResize(root.querySelector('#project'), ['width'], ['50%']);
    persistResize(root.querySelector('#engine'), ['width', 'height'], ['50%', '50%']);
};