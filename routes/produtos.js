const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');

// Rota para listar produtos
router.get('/', async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.render('produtos/index', { produtos });
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        res.status(500).send("Erro no servidor");
    }
});

// Rota para exibir o formulário de cadastro de produto
router.get('/cadastrar', (req, res) => res.render('produtos/cadastrarProduto'));

// Rota para cadastrar o produto
router.post('/cadastrar', async (req, res) => {
    const { prodnome, prodpreco, proddescricao } = req.body;
    await Produto.create({ prodnome, prodpreco, proddescricao });
    res.redirect('/produtos');
});

// Rota para editar um produto
router.get('/editar/:id', async (req, res) => {
    const produto = await Produto.findByPk(req.params.id);
    res.render('produtos/editarProduto', { produto });
});

// Rota para atualizar o produto
router.post('/editar/:id', async (req, res) => {
    const { prodnome, prodpreco, proddescricao } = req.body;
    await Produto.update({ prodnome, prodpreco, proddescricao }, { where: { prodid: req.params.id } });
    res.redirect('/produtos');
});

// Rota para deletar um produto
router.post('/deletar/:id', async (req, res) => {
    await Produto.destroy({ where: { prodid: req.params.id } });
    res.redirect('/produtos');
});

module.exports = router;
