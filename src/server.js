const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '10.0.0.210',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });
    server.route(routes);
    await server.start();
    console.log(`server berjalan pada http://${host}:${port}`);
};

init();