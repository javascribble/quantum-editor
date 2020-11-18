export const saveJson = (key, object) => localStorage.setItem(key, JSON.stringify(object));

export const loadJson = (key) => localStorage.hasOwnProperty(key) && JSON.parse(localStorage.getItem(key));