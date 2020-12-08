
const fakeRequest = require('supertest');
const app = require('../index.js');
const pool = require('../lib/utils/pool.js');
const fs = require('fs');

describe('test dogs CRUD routes', () => {
    beforeAll(async () => {
        await pool.query(fs.readFileSync('./data/setup.sql', 'utf-8'));
    });

    afterAll(async () => {
        await pool.end();
    })

    it('tests server through /test route', async () => {
        const response = await fakeRequest(app).get('/test');
        const expectedResponse = { greeting: 'HELLO POSTMAN!' };
        expect(response.body).toEqual(expectedResponse);
    });
});