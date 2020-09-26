import { Request, Response } from 'express';

export const indexWelcome = (req: Request, res: Response) => {
    return res.status(200).json({
        message: 'Welcome to the Server',
    });
};
