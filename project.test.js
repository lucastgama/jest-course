const sum = require('./sum');
const createObjectWithAssignment = require('./objectAssignment');
const returnValue = require('./truthiness');
const myFunction = require('./throwFunction');
const { fetchData, fetchPromise } = require('./asynchronous');

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

test('Asynchronous data fetch', done => {
    function callback(data) {
        try {
            expect(data).toEqual({ name: "John", age: 30 });
            done();
        } catch (error) {
            done(error);
        }
    }
    fetchData(callback);
});

test('Asynchronous data fetch with Promise', () => {
    return expect(fetchPromise()).resolves.toEqual({ name: "John", age: 30 });
});

test('fetch fails with error', () => {
    return expect(fetchPromise()).rejects.toThrow('Network error');
});

test('Asynchronous data fetch with async/await', async () => {
    const data = await fetchPromise();
    expect(data).toEqual({ name: "John", age: 30 });
});

test('Mock function example', () => {
    const mockCallback = jest.fn(x => x + 1);
    const result = [1, 2, 3].map(mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(3);
    expect(result).toEqual([2, 3, 4]);
});

test('spying on a method', () => {
    const video = { play() { return true; } };
    const spy = jest.spyOn(video, 'play');
    video.play();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
});