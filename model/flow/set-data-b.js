'use strict';

const delay = require('../../delay');

function setDataB({ model, delayMillis }) {
  const valueA = model.get('a');

  return delay(delayMillis, model.set('b', `${valueA}+B`));
}

module.exports = setDataB;
