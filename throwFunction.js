function myFunction(input) {
    if(typeof input !== 'number') {
        throw new Error('Invalid input');
    }
}

module.exports = myFunction;