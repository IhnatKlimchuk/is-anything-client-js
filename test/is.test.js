const assert = require('assert');
const is = require('../');

describe('Simple main test', () => {
    it('is("habr.com").awesome() return true', async () => {
        const result = await is("habr.com").awesome();
        assert.equal(result, true);
    });
    it('is("habr.com").amazing() return true', async () => {
        const result = await is("habr.com").amazing();
        assert.equal(result, true);
    });
    it('is(13).thirteen() return true', async () => {
        const result = await is(13).thirteen();
        assert.equal(result, true);
    });
    it('is(12).thirteen() return false', async () => {
        const result = await is(12).thirteen();
        assert.equal(result, false);
    });
    it('is().thirteen() throws', async () => {
        await assert.rejects(async () => { await is().thirteen() }, Error);
    });
});