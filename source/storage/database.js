import { databaseOptions } from '../constants/storage.js';

export const createDatabase = (options = databaseOptions) => new Promise((resolve, reject) => {
    const { name, version, stores } = options;
    const request = window.indexedDB.open(name, version);
    request.onupgradeneeded = event => createStores(event.target.result, stores);
    request.onsuccess = event => resolve(request.result);
    request.onerror = event => reject(event);
});

const createStores = (database, stores) => {
    for (const { name, options, indices } of stores) {
        const store = database.createObjectStore(name, options);
        createIndices(store, indices);
    }
};

const createIndices = (store, indices) => {
    for (const { name, path, options } of indices) {
        store.createIndex(name, path, options);
    }
};