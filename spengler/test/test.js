const assert = require('chai').assert;
const ghostbusters = ['spengler', 'venkman', 'stantz', 'zeddemore'];

describe('ghostbusters', function() {

    context('array of ghostbusters', function() {
        it('is an array', function() {
            assert.isArray(ghostbusters, 'is array of ghostbusters');
            assert.include(ghostbusters, 'spengler', 'array contains spengler');
            assert.lengthOf(ghostbusters, 4, 'array contains 4 ghostbusters');
        });
    });

});
