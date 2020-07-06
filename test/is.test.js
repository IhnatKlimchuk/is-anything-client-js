'use strict';

const assert = require('assert');
const is = require('../');

describe('Simple main test', () => {
    it('is("habr.com").awesome() return null', async () => {
        const result = await is("habr.com").awesome();
        assert.equal(result, undefined);
    });
    it('is("habr.com").amazing() return null', async () => {
        const result = await is("habr.com").amazing();
        assert.equal(result, undefined);
    });
    it('is(13).thirteen() return null', async () => {
        const result = await is(13).thirteen();
        assert.equal(result, undefined);
    });
    it('is().thirteen() throws', async () => {
        await assert.rejects(async () => { await is().thirteen() }, Error);
    });
});