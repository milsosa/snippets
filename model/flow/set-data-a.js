'use strict';

const delay = require('../../delay');

function setDataA({ model, delayMillis }) {
    return delay(delayMillis, model.set('a', 'A'));
}

module.exports = setDataA;
