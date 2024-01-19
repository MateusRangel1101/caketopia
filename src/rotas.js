const express = require('express');
const rotas = express();

const verificarUsuarioLogado = require('./intermediarios/autenticacao');
const validarRequisicao = require('./intermediarios/validar_requisicao');

const loginSchema = require('./validacoes/login');
const usuarioSchema = require('./validacoes/usuarios');

const login = require('./controladores/login');
const { cadastrarUsuario, detalharPerfil } = require('./controladores/usuarios');
const { cadastrarIngrediente, exibirTodosIngredientes, pesquisarIngrediente } = require('./controladores/ingredientes');

rotas.post('/usuario', /*validarRequisicao(usuarioSchema),*/ cadastrarUsuario);
rotas.post('/login', validarRequisicao(loginSchema), login);

rotas.use(verificarUsuarioLogado);

rotas.get('/usuario', detalharPerfil);
rotas.post('/ingrediente', cadastrarIngrediente);
rotas.get('/ingrediente/:id', pesquisarIngrediente);
rotas.get('/ingrediente', exibirTodosIngredientes);



module.exports = rotas;