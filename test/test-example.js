const chai = require('chai');
const { expect, assert } = chai;
it.optional = require('../extensions/it-optional');

Object.freeze(assert);

const FUNCTION_NAME = require('../js/filename.js');

describe('FUNCTION_NAME', () => {    
    //Functional requirements
    describe('sample text', () => {
        it.optional('returns correct answer', () => {
            assert.deepEqual(calculateHanoi(5, 4074), {turns: 31, seconds: 27});
            assert.deepEqual(calculateHanoi(38, 4594), {turns: 274877906943, seconds: 215402800390});
            assert.deepEqual(calculateHanoi(34, 4005), {turns: 17179869183, seconds: 15442579040});
            assert.deepEqual(calculateHanoi(19, 4770), {turns: 524287, seconds: 395688});
            assert.deepEqual(calculateHanoi(23, 4344), {turns: 8388607, seconds: 6951884});
            assert.deepEqual(calculateHanoi(9, 4347), {turns: 511, seconds: 423});
        });
    });
});