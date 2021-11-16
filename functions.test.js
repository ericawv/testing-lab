// const { test } = require('picomatch');
const {
    returnTwo, 
    greeting, 
    add,
    multiply,
    divide,
    subtract


} = require('./functions.js')

test("This test should return 2", () => {
    expect(returnTwo()).toEqual(2);
});

describe('greeting tests',  () => {
    test('greeting should equal Hello James', () => {
      expect(greeting('James')).toEqual('Hello, James.');
    });
    test('greeting should equal Hello Jill', () => {
        expect(greeting('Jill')).toEqual('Hello, Jill.');
    });

  });

  describe('add tests',  () => {
    test('add should equal 3', () => {
      expect(add(1, 2)).toEqual(3);
    });
    test('add should equal 14', () => {
        expect(add(5, 9)).toEqual(14);
    });

  });