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

module.exports = {
    cadastrarIngrediente,

}