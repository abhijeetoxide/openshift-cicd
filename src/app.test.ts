import request from 'supertest';
import { app, server } from './app';

beforeAll((done) => {
    server.once('listening', done);
});

afterAll((done) => {
    server.close(done);
});

describe('GET /', () => {
    it('should respond with "Hello from OpenShift with TypeScript!"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello from OpenShift with TypeScript!');
    });
});
