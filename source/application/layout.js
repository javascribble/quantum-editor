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

const saveLayout = element => {
    observables.set(element.id, { properties });
    resizeObserver.observe(element);
};

const loadLayout = element => {

};

export const configureLayout = (root, selector) => {
    const elements = root.querySelectorAll(selector);
};

const enableScaling = (element, target, factor = 1.2) => {
    let scale = 1;
    const applyScale = event => {
        target.style.transform = `scale(${scale = clamp(event.deltaY < 0 ? scale * factor : scale / factor, 0, 2)})`;
        target.style.transformOrigin = "50% 50% 0px";
    };

    element.addEventListener('wheel', applyScale, { passive: true });
};