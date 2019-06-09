var mongoose = require('mongoose');

let login = {
    signup: function(req, res) {
        let body = req.body;
        var Usuario = mongoose.model('User');

        if (!body.cpf && !body.password) {
            return res.status(400).send({ success: false, message: "Cpf ou Password não informados." })
        }

        Usuario.findOne({ 'cpf': body.cpf }, function(err, user) {
            // if there are any errors, return the error
            if (err) return res.status(400).send({ success: false, message: "Erro interno" })

            // check to see if theres already a user with that email
            if (user)
                return res.status(400).send({ success: false, message: "Usuário com esse cpf já existe" })

            var newUser = new Usuario();

            // set the user's local credentials
            newUser.cpf = body.cpf;
            newUser.password = newUser.generateHash(body.password);

            // save the user
            newUser.save(function(err) {
                if (err)
                    return res.status(400).send({ success: false, message: "Erro interno" })

                return res.status(200).send({ success: true, message: "Usuário cadastrado com sucesso." })
            });
        })

    },
    newLogin: (req, res) => {
        let body = req.body;
        var Usuario = mongoose.model('User');

        if (!body.cpf && !body.password) {
            res.status(400).send({ success: false, message: "Cpf ou Password não informados." })
        }

        Usuario.findOne({ 'cpf': body.cpf }, function(err, user) {
            // if there are any errors, return the error
            if (err) return res.status(400).send({ success: false, message: "Erro interno" })

            if (!user.validPassword(body.password)) {
                return res.status(403).send({ success: false, message: "Senha incorreta" })
            }

            // check to see if theres already a user with that email
            if (user)
                return res.status(200).send({ success: true, user: user })
        })

    }
}

module.exports = login