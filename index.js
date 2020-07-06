'use strict';

var is = function is(x) {
    return new Proxy({}, {
        get(target, property) {
            return function () {
                //replace with http call
                return new Promise(resolve => resolve(undefined));
            };
        }
    });
}

module.exports = is;