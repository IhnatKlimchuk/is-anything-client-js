'use strict';

const axios = require('axios');
const apiUrl = 'http://localhost:5000/api/is';

var is = function is(x) {
    return new Proxy({}, {
        get(target, property) {
            return async function () {
                try {
                    const response = await axios.get(apiUrl, { 
                        params: {
                            subject: x,
                            predicate: property
                        }
                    });
                    return response.data.value;
                } catch (error) {
                    if(error.response && error.response.status === 400) {
                        throw new Error(Object.values(error.response.data).flat().join(' '));
                    } else {
                        throw error;
                    }
                }
            };
        }
    });
}

module.exports = is;