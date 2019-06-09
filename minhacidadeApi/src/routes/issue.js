const issueModule = require("../modules/issue")

module.exports = function(app) {
    //Renderiza o index caso o usuário esteja logado.
    app.route('/minhagoiania/issue/:id')
        .get(issueModule.listar)
        .post(issueModule.cadastrar)

    app.route('/minhagoiania/issue/listarStatus/:status')
        .get(issueModule.listarStatus)
}