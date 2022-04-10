// Usado para acessarmos as variáveis no arquivo '.env'
require('dotenv').config();

const express = require('express');
const app = express();

// Mongoose para conexão com base online
const mongoose = require('mongoose');

// A Aplicação irá emitir um sinal para o DB
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado à base de dados.')
        app.emit('pronto');
    })
    // Caso ocorra um erro de conexão o erro será mostrado no log
    .catch(e => console.log(e));

// Criará uma sessão para coleta e confirmação de dados do usuário
const session = require('express-session');
const MongoStore = require('connect-mongo');

// Auxilia em envio de mensagens de aplicação
const flash = require('connect-flash');

// Adiciona o arquivo de administração de rotas
const routes = require('./routes');

// Auxiliar para encontrar caminhos de arquivos
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');

const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middleware/middleware');

// Usado para restringir a utilização de nossa API exclusivamente ao usuário de acesso
app.use(helmet());

// Usado para receber o objeto no post
app.use(express.urlencoded({extended: true}));

// Usar um diretório para acessar aquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// Configuração e informações de sessão
const sessionOptions = session({
    secret: 'hfukshabnof',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
        mongoUrl: process.env.CONNECTIONSTRING,
        ttl: 1000 *60 *60 *24 *7, // 7 dias da semana
        httpOnly: true 
    })
});

app.use(sessionOptions);
app.use(flash());
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Aplica um token para ser verificado e consumido pela API
app.use(csrf());

// Nossos próprios middlewares
app.use(middlewareGlobal);

// Middleware para conferir o token CSRF
app.use(csrfMiddleware);

// Exibe um erro quando o csrf estiver ausente
app.use(checkCsrfError);

// Aplicar a utilização de routes
app.use(routes);

// A Aplicação só executará quando for capturado o sinal de pronto quando a conexão com o DB for efetuada
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor iniciado na porta 3000');
        console.log('Acessar http://localhost:3000');
    });
});
