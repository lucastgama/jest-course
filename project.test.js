const sum = require('./sum');
const createObjectWithAssignment = require('./objectAssignment');
const returnValue = require('./truthiness');
const myFunction = require('./throwFunction');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
    const result = createObjectWithAssignment({ one: 1 }, 'two', 2);
    expect(result).toEqual({ one: 1, two: 2 });
});

test('zero is falsy', () => {
    expect(returnValue(0)).toBeFalsy();
});

test('one is truthy', () => {
    expect(returnValue(1)).toBeTruthy();
});

test('throws on invalid input', () => {
    expect(() => myFunction("test")).toThrow();
});