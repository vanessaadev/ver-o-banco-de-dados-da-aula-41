//importando o express
const express = require('express');

//criando o app para adicionar as novas rotas/endpoints
const app = express.Router();

//criando uma rota do tipo GET para buscar todas as escolas
app.get('/escolas', async (req, res) => {
    let dados = await database.execute('SELECT * FROM tb_escola');

    res.send(dados);
});

app.get('escolas/:id', async (req, res) => {
    let dados = await database.execute(`
    SELECT * FROM tb_escola WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.delete('escolas/:id', async (req, res) => {
    await database.execute(`
    DELETE FROM tb_escola WHERE id='${req.params.id}'
    `);

    res.sendStatus(204);
});


//exportando todas as rotas criadas nesse arquivo
module.exports = app;
