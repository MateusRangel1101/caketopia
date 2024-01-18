const express = require('express');
const rotas = express();

const verificarUsuarioLogado = require('./intermediarios/autenticacao');
const validarRequisicao = require('./intermediarios/validar_requisicao');

const loginSchema = require('./validacoes/login');
const usuarioSchema = require('./validacoes/usuarios');

const login = require('./controladores/login');
const { cadastrarUsuario } = require('./controladores/usuarios');

rotas.post('/usuario', /*validarRequisicao(usuarioSchema),*/ cadastrarUsuario);
rotas.post('/login', validarRequisicao(loginSchema), login);

// rotas.use(verificarUsuarioLogado);

module.exports = rotas;