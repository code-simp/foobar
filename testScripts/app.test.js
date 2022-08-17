const request = require('supertest');
const app = require('../app');

describe('app test', () => {
    it('should return 2', async () => {
        const response = await request(app).get("/");
        console.log(response.body);
        return expect(response.body).toEqual({ "a": 3 });

    });
});