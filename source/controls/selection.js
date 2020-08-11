import { mouseUpEvent, mouseMoveEvent, mouseDownEvent } from '../constants/browser.js';
import { shown, show, hide } from '../utilities/styles.js';

// TODO: Find better place for these.
const rectanglesOverlap = (a, b) => !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
const distanceSquaredVector2Object = (v2a, v2b) => Math.pow(v2a.x - v2b.x, 2) + Math.pow(v2a.y - v2b.y, 2);

export const enableSelection = (root, selection, selector = '[selectable]') => {
    const origin = {};

    const draw = (event) => {
        const style = selection.style, x = event.clientX, y = event.clientY;
        style.top = `${y < origin.y ? y : origin.y}px`;
        style.left = `${x < origin.x ? x : origin.x}px`;
        style.width = `${Math.abs(x - origin.x)}px`;
        style.height = `${Math.abs(y - origin.y)}px`;
        if (!shown(selection) && distanceSquaredVector2Object(origin, { x, y }) > 30) {
            show(selection);
        }
    };

    const open = (event) => {
        root.addEventListener(mouseMoveEvent, draw);
        origin.x = event.clientX;
        origin.y = event.clientY;
    };

    const close = (event) => {
        root.removeEventListener(mouseMoveEvent, draw);
        if (shown(selection)) {
            hide(selection);
            const selectEvent = new Event('select');
            const box = selection.getBoundingClientRect();
            root.querySelectorAll(selector).forEach(element => {
                if (rectanglesOverlap(box, element.getBoundingClientRect())) {
                    element.dispatchEvent(selectEvent);
                }
            });
        }
    };

    root.addEventListener(mouseDownEvent, open);
    root.addEventListener(mouseUpEvent, close);
};