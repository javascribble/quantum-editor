import { on, off, dispatch, queryAll } from '@javascribble/quantum';
import { mouseUpEvent, mouseMoveEvent, mouseDownEvent } from '../constants/events.js';
import { show, hide, shown } from '../utilities/styles.js';
import { SelectEvent } from '../events/select.js';

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
        on(root, mouseMoveEvent, draw);
        origin.x = event.clientX;
        origin.y = event.clientY;
    };

    const close = (event) => {
        off(root, mouseMoveEvent, draw);
        if (shown(selection)) {
            hide(selection);
            const selectEvent = new SelectEvent(event);
            const box = selection.getBoundingClientRect();
            queryAll(root, selector).forEach(element => {
                if (rectanglesOverlap(box, element.getBoundingClientRect())) {
                    dispatch(element, selectEvent);
                }
            });
        }
    };

    on(root, mouseDownEvent, open);
    on(root, mouseUpEvent, close);
};