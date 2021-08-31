import express, { NextFunction, Request, Response } from 'express'
import { AppError } from './shared/AppError';

const app = express();

app.use(express.json())

// app.use(router)

app.get('/', (req, res) => {
    return res.send('Hello World');
})

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        });

    };

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    });
})

export { app }
