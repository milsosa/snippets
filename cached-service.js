const cachedFetch = require('./cached-fetcher');
const delay = require('./delay');

const key = 'my-key';
const fetch = () => delay(500, 'data');

async function run(times) {
    const task = () => cachedFetch({ key, fetch });

    for (let i = 1; i <= times; i++) {
        const value = await task();

        console.log('run %d, value: %s', i, value);

        if (i % 5 === 0) cachedFetch.clearCache();
    }
}

run(20);