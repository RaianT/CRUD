const express = require('express');
const path = require('path');
const sequelize = require('./config/database');
const produtosRoutes = require('./routes/produtos');
const clientesRoutes = require('./routes/clientes'); 
const indexRoutes = require('./routes/index'); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/produtos', produtosRoutes);
app.use('/clientes', clientesRoutes); 
app.use('/', indexRoutes);

app.set('view engine', 'ejs');

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
}).catch(error => console.log('Erro ao conectar com o banco de dados:', error));
