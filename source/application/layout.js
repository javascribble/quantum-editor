import { saveStyles, loadStyles } from '../utilities/styles.js';

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

export const configureLayout = editor => {
    const root = editor.shadowRoot;
    persistResize(root.querySelector('#project'), ['width'], ['50%']);
    persistResize(root.querySelector('#engine'), ['width', 'height'], ['50%', '50%']);
};