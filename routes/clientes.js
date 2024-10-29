const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');

// Rota para renderizar a página inicial com a lista de clientes
router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.render('clientes/index', { clientes });
    } catch (error) {
        console.error("Erro ao buscar clientes:", error);
        res.status(500).send("Erro no servidor");
    }
});

// Cadastrar Cliente
router.get('/cadastrar', (req, res) => res.render('clientes/cadastrarCliente'));
router.post('/cadastrar', async (req, res) => {
    const { clinome, clicelular, cliemail, clidatanasc, clirua, clinumero, clibairro, clicep, clicomplemento } = req.body;
    await Cliente.create({ clinome, clicelular, cliemail, clidatanasc, clirua, clinumero, clibairro, clicep, clicomplemento });
    res.redirect('/clientes');
});

// Editar Cliente
router.get('/editar/:id', async (req, res) => {
    const cliente = await Cliente.findByPk(req.params.id);
    res.render('clientes/editarCliente', { cliente }); // Alterado para 'editarCliente'
});
router.post('/editar/:id', async (req, res) => {
    const { clinome, clicelular, cliemail, clidatanasc, clirua, clinumero, clibairro, clicep, clicomplemento } = req.body;
    await Cliente.update({ clinome, clicelular, cliemail, clidatanasc, clirua, clinumero, clibairro, clicep, clicomplemento }, { where: { clicod: req.params.id } });
    res.redirect('/clientes');
});

// Deletar Cliente
router.post('/deletar/:id', async (req, res) => {
    await Cliente.destroy({ where: { clicod: req.params.id } });
    res.redirect('/clientes');
});

module.exports = router;
