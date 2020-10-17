/* Importar dependencia */
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

/* Iniciando o express */
const server = express()
server
    /* Utilizar body do req */
    .use(express.urlencoded({extented: true}))
    /* Utilizando os arquivos estaticos */
    .use(express.static('public'))

    /* Configurar template engine */
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    /* Rotas da app */
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .get('/return_orphanage', pages.return_orphanage)
    .post('/save-orphanage', pages.saveOrphanage)

/* Ligar o servidor */
server.listen(5500)


