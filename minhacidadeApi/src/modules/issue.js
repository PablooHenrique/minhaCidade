let mongoose = require("mongoose");
let issue = {
    cadastrar: (req, res) => {
        let Issue = mongoose.model("Issue");
        if (!req.params.id && !req.body.local) return res.status(403).send({ success: false, message: "Usuário ou local da denúncia não informados." });
        let newIssue = new Issue();
        newIssue.category = req.body.category || "";
        newIssue.local = req.body.local
        newIssue.userReport = req.params.id;
        newIssue.observacao = req.body.observacao;

        newIssue.save((err) => {
            if (err)
                return res.status(400).send({ success: false, message: err.message })

            return res.status(200).send({ success: true, message: "Problema cadastado com sucesso." })
        })
    },
    listar: (req, res) => {
        let Issue = mongoose.model("Issue");
        if (!req.params.id) return res.status(403).send({ success: false, message: "Usuário não informados." });
        let id = mongoose.Types.ObjectId(req.params.id)
        Issue.find({ "userReport": id })
            .then((issues) => {
                res.status(200).send(issues);
            })
            .catch((err) => {
                res.status(500).send({ success: false, message: err.message });
            })
    },
    listarStatus: (req, res) => {
        let Issue = mongoose.model("Issue");
        Issue.find({ "status": req.params.status })
            .then((issues) => {
                res.status(200).send(issues);
            })
            .catch((err) => {
                res.status(500).send({ success: false, message: err.message });
            })
    }
}
module.exports = issue;