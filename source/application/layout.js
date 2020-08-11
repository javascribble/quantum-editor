const saveStyles = (element, properties) => {
    const style = element.style;
    for (let i = 0; i < properties.length; i++) {
        const property = properties[i];
        localStorage.setItem(`${element.id}-${property}`, style[property]);
    }
};

const loadStyles = (element, properties, defaults) => {
    const style = element.style;
    for (let i = 0; i < properties.length; i++) {
        const property = properties[i];
        style[property] = localStorage.getItem(`${element.id}-${property}`) || defaults[i];
    }
};

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

const enableScaling = (element) => {
    let scale = 1;
    const factor = 1.2;
    const viewport = root.querySelector('#viewport');
    viewport.addEventListener("wheel", (event) => {
        event.preventDefault();
        scale = Math.clamp(event.deltaY < 0 ? scale * factor : scale / factor, 0, 1);
        viewport.style.transform = `scale(${scale})`;
        viewport.style.transformOrigin = "50% 50% 0px";
    });
};

export const configureLayout = root => {
    persistResize(root.querySelector('#objects'), ['width'], ['300px']);
    persistResize(root.querySelector('#properties'), ['width'], ['300px']);
    persistResize(root.querySelector('#viewport'), ['width', 'height'], ['300px', '300px']);
};