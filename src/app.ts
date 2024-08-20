import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello from OpenShift with TypeScript!');
});

const server = app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

export { app, server };
