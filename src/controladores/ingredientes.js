const knex = require("../conexao")

const cadastrarIngrediente = async (req, res) => {
    let { nome, preco, quantidadeembalagem, sistemademedida } = req.body
    nome = nome.toUpperCase().trim()

    try {
        const ingredienteEncontrado = await knex("ingredientes").where({ nome }).first()

        if (ingredienteEncontrado) {
            return res.status(400).json({ mensagem: "Ingrediente já existe." })
        }

        const ingredienteCadastrado = await knex("ingredientes")
            .insert({
                nome,
                preco,
                quantidadeembalagem,
                sistemademedida
            })
            .returning("*");

        return res.status(200).json(ingredienteCadastrado);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

const pesquisarIngrediente = async (req, res) => {
    const { id } = req.params
    try {
        const ingredienteEncontrado = await knex("ingredientes").where({ id }).first()

        if (!ingredienteEncontrado) {
            return res.status(400).json({ mensagem: "Nenhum ingrediente encontrado com esse ID." })
        }

        return res.status(200).json(ingredienteEncontrado);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

const exibirTodosIngredientes = async (req, res) => {
    try {
        const ingredienteEncontrado = await knex("ingredientes")

        if (!ingredienteEncontrado) {
            return res.status(400).json({ mensagem: "Nenhum ingrediente cadastrado." })
        }

        return res.status(200).json(ingredienteEncontrado);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

module.exports = {
    cadastrarIngrediente,
    exibirTodosIngredientes,
    pesquisarIngrediente,
}