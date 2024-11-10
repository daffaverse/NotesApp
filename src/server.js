require('dotenv').config();

const Hapi = require('@hapi/hapi');

const { PORT, HOST } = process.env;

const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: PORT,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        // tanpa cors kita tidak dapat menyimpan data dari frontend yang deploy
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();

    console.log(`Server running on port ${server.info.uri}`);
};

init();
