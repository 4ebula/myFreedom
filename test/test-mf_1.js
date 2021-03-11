const chai = require('chai');
const { expect, assert } = chai;
it.optional = require('../extensions/it-optional');

Object.freeze(assert);

const variableChanger = require('../js/mf_1.js');

let randomArr = Array.from({length: 20}, () => Math.trunc(Math.random() * 50 + 1))

describe('variableChanger', () => {    
    //Functional requirements
    describe('Simple test', () => {
        it.optional('returns correct answer', () => {
            assert.deepEqual(variableChanger(randomArr[0], randomArr[1]), [randomArr[1], randomArr[0]]);
        });
        it.optional('returns correct answer', () => {
            assert.deepEqual(variableChanger(randomArr[2], randomArr[3]), [randomArr[3], randomArr[2]]);
        });
        it.optional('returns correct answer', () => {    
            assert.deepEqual(variableChanger(randomArr[4], randomArr[5]), [randomArr[5], randomArr[4]]);
        });
        it.optional('returns correct answer', () => {  
            assert.deepEqual(variableChanger(randomArr[6], randomArr[7]), [randomArr[7], randomArr[6]]);
        });
        it.optional('returns correct answer', () => {  
            assert.deepEqual(variableChanger(randomArr[8], randomArr[9]), [randomArr[9], randomArr[8]]);
        });
        it.optional('returns correct answer', () => {  
            assert.deepEqual(variableChanger(randomArr[10], randomArr[11]), [randomArr[11], randomArr[10]]);
        });
        it.optional('returns correct answer', () => {  
            assert.deepEqual(variableChanger(randomArr[12], randomArr[13]), [randomArr[13], randomArr[12]]);
        });
    });
});