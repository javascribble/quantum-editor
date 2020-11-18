import { storedActions } from '../constants/options.js';

const previous = [];
const next = [];

export const act = (invoke, reverse) => {
    previous.push({ invoke, reverse });
    if (previous.length > storedActions) {
        previous.shift();
    }

    if (next.length > 0) {
        next = [];
    }

    invoke();
};

export const undo = () => {
    if (previous.length > 0) {
        const action = previous.pop();
        action.reverse();
        next.push(action);
    }
};

export const redo = () => {
    if (next.length > 0) {
        const action = next.pop();
        action.invoke();
        previous.push(action);
    }
};