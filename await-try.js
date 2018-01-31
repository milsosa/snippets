
const catchify = require('catchify');
const delay = require('./delay');

const identity = err => err;

async function awaitTry(fn, onError = identity) {
    try {
        return await fn();
    } catch(err) {
        const error = onError(err);

        if (error) {
            throw error;
        }
    }
}

async function throwAfter(ms) {
    return delay.reject(ms, new Error('thrown error'));
}

async function run(fn, onError) {
    // return await awaitTry(fn, onError);
    const [err, val] = await catchify(fn());

    if (err) throw onError(err);

    return val;

    // return fn()
    //     .catch(err => { throw onError(err) });
}

const goodFn = () => delay(1000, 'some value');
const badFn = () => throwAfter(1000);

const onError = (cause) => new Error(`failed operation due to: ${cause.message || cause}`);

run(badFn, onError)
    .then(
        (val) => console.log('resolved value: ', val),
    )
    .catch(
        (err) => console.error('faile with error: ', err),
    );
