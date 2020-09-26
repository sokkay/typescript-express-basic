import { Server } from './server';

function main(): void {
    const server = Server.instance;
    server.start();
}

main();
