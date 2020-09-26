import express from 'express';
import * as http from 'http';
require('dotenv').config();

import indexRoutes from './routes/index.routes';

export class Server {
    public app: express.Application;
    public server: http.Server | undefined;

    private static _instance: Server;

    private constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    public config(): void {
        this.app.set('port', process.env.PORT || 3000);
    }

    public start(): void {
        this.server = this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }

    private routes(): void {
        this.app.use('/', indexRoutes);
    }
}
