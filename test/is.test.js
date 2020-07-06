'use strict';

const assert = require('assert');
const is = require('../');

describe('Simple main test', () => {
    it('is("habr.com").awesome() return undefined', async () => {
        const result = await is("habr.com").awesome();
        assert.equal(result, undefined);
    });
    it('is("habr.com").amazing() return undefined', async () => {
        const result = await is("habr.com").amazing();
        assert.equal(result, undefined);
    });
    it('is(13).thirteen() return undefined', async () => {
        const result = await is(13).thirteen();
        assert.equal(result, undefined);
    });
});