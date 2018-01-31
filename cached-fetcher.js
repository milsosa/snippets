const delay = require('./delay');

const cache = new Map();

async function getFromCache(key) {
    const value = cache.get(key);

    console.log('get from cache');

    return await delay(10, value ? `${value} - from cache` : null);
}

async function saveToCache(key, val) {
    console.log('set to cache');

    return await delay(10, cache.set(key, val));
}

async function cachedFetch(opts) {
    const {
        fetch,
        key,
    } = opts;

    let value = await getFromCache(key);

    if (!value) {
        console.log('fetch from remote');
        
        value = await fetch();

        await saveToCache(key, value);
    }

    return value;
}

module.exports = cachedFetch;

module.exports.clearCache = () => cache.clear();
