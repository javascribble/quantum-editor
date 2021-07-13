const { resizeObserver } = quantum;

const saveLayout = element => {
    resizeObserver.observe(element);
    element.addEventListener('resize', () => saveStyles(target, observable.properties));
};

const loadLayout = element => {

};

const enableScaling = (element, target, factor = 1.2) => {
    let scale = 1;
    const applyScale = event => {
        target.style.transform = `scale(${scale = clamp(event.deltaY < 0 ? scale * factor : scale / factor, 0, 2)})`;
        target.style.transformOrigin = "50% 50% 0px";
    };

    element.addEventListener('wheel', applyScale, { passive: true });
};

export const configureLayout = (root, selector) => {
    const elements = root.querySelectorAll(selector);
};