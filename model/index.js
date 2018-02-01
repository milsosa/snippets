'use strict';

const { get, set } = require('lodash');

class Model {
  constructor() {
    this.data = {};
  }

  get(path) {
    return get(this.data, path);
  }

  set(path, value) {
    set(this.data, path, value);

    return value;
  }
}

module.exports = Model;
