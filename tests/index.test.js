
const fakeRequest = require('supertest');
const app = require('../index.js');
const pool = require('../lib/utils/pool.js');
const fs = require('fs');
const testDog = {
    id: '1',
    name: 'Marcus',
    age: 6,
    breed: 'Terrier',
    nicknames: ['Ping', 'Boobie', 'Boo']
}



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

    it('test /insert CRUD route', async () => {
        const response = await fakeRequest(app)
            .post('/insert')
            .send(testDog);

        expect(response.body).toEqual(testDog);
    })


});