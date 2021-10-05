import { transactionOptions } from '../constants/storage.js';

export const createTransaction = (database, stores, readonly = true, options = transactionOptions) => {
    const transaction = database.transaction(stores, readonly ? 'readonly' : 'readwrite', options);
    transaction.oncomplete = event => { };
    transaction.onerror = event => { };
    transaction.onabort = event => { };
    return stores.map(store => transaction.objectStore(objectStoreName));
};

const getItems = store => new Promise((resolve, reject) => {
    const request = store.openCursor();
    request.onsuccess = event => {
        const cursor = event.target.result;
        const results = [];
        while (cursor) {
            results.push(cursor.value);
            cursor.continue();
        }

        resolve(results);
    };

    request.onerror = event => reject(event);
});

const getItem = (store, id) => new Promise((resolve, reject) => {
    const request = store.get(id);
    request.onsuccess = event => resolve(request.result);
    request.onerror = event => reject(event);
});

const addItem = (store, item) => new Promise((resolve, reject) => {
    const request = store.add(item);
    request.onsuccess = event => resolve();
    request.onerror = event => reject(event);
});

const updateItem = (store, item) => new Promise((resolve, reject) => {
    const request = store.put(item);
    request.onsuccess = event => resolve();
    request.onerror = event => reject(event);
});

const deleteItem = (store, id) => new Promise((resolve, reject) => {
    const request = store.delete(id);
    request.onsuccess = event => resolve();
    request.onerror = event => reject(event);
});