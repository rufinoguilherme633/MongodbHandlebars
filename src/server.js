// Importando módulos necessários
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Importando as rotas
const rota_tarefas = require('./controller/tarefacontroller');

const app = express();

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Corrige o caminho da pasta views 👇
app.set('views', path.join(__dirname, 'views'));

// Configuração do Handlebars
app.engine('handlebars', handlebars.engine({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Pasta pública (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/rota_tarefas', rota_tarefas);

// Porta do servidor
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
