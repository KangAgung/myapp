const request = require('supertest');
const app = require('../app');

describe('API', function () {
    describe('GET /', function () {
        it('should GET all data', function (done) {
            request(app)
                .get('/')
                .expect(200,done);
        });
    });
});