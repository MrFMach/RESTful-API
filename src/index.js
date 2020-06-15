require('./services/mongo');            // open connection to application

const Hapi = require('@hapi/hapi');     // import hapi
const routes = require('./routes');     // import routes 

// função init
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(routes);

    await server.start();         // inicialização da aplicação do node   //await = JS deve esperar a inicialização do servidor
    console.log('Server running in %s', server.info.uri);
};
// tratamento do evento de um erro específico 
process.on('unhandledRejection', (err) => {

    console.log(err);   // imprime o erro
    process.exit(1);    // encerra o processo
});

init();