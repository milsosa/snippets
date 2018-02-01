'use strict';

const delay = require('../../delay');

function setDataC({ model, delayMillis }) {
    const valueB = model.get('b');

    return delay(delayMillis, model.set('c', `${valueB}+C`));
}

module.exports = setDataC;
