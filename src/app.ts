import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan'; // For logging HTTP requests

const app = express();
const port = process.env.PORT || 8080;

// Middleware for logging HTTP requests
app.use(morgan('combined'));

// Basic route
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the CICD Demo for OpenShift!');
});

// Health check route
app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'UP' });
});

// 404 handler for unknown routes
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send('Sorry, we cannot find that!');
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
const server = app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

export { app, server };
