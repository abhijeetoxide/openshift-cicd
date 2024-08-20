import request from 'supertest';
import { app, server } from './app';

beforeAll((done) => {
    server.once('listening', done);
});

afterAll((done) => {
    server.close(done);
});

describe('GET /', () => {
    it('should respond with "Welcome to the CICD Demo for OpenShift!"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Welcome to the CICD Demo for OpenShift!');
    });
});

describe('GET /health', () => {
    it('should respond with { status: "UP" }', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ status: 'UP' });
    });
});

describe('GET /unknown-route', () => {
    it('should respond with 404 for unknown routes', async () => {
        const response = await request(app).get('/unknown-route');
        expect(response.status).toBe(404);
        expect(response.text).toBe('Sorry, we cannot find that!');
    });
});
