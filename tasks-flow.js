'use strict';

const flow = require('flow-wing');
const Model = require('./model');
const setDataA = require('./model/flow/set-data-a');
const setDataB = require('./model/flow/set-data-b');
const setDataC = require('./model/flow/set-data-c');

const Task = flow.Task;

const ctx = {
  model: new Model(),
  delayMillis: 100,
};

const tasksFlow = flow([
  Task.create(setDataA),
  Task.create(setDataB),
  Task.create(setDataC)
], { name: 'TestFlow' });

tasksFlow.run(ctx)
  .then(result => {
    const { context, results } = result;

    console.log('result model:', context.model);
    console.log('tasks results:', results);
  })
  .catch(console.error);
