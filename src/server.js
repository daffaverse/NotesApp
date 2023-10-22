require('dotenv').config();

const Hapi = require('@hapi/hapi');

const { PORT, HOST } = process.env;

const init = async () => {
    const server = Hapi.server({
        port: PORT,
        host: HOST,
    });

    await server.start();

    console.log(`Server running on port ${server.info.uri}`);
};

init();
