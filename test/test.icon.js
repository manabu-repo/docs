const Request = require('../function/request');
const request = Request();

const result = request.getIcon('test.com', 'default', this);
console.log('res', result);
