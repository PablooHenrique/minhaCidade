const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

let Schema = mongoose.Schema;

let issueSchema = new Schema({
    protocolo: Number,
    category: {
        type: String,
        enum: ['limpeza', 'pintura', 'iluminação', 'jardinagem'],
    },
    status: {
        type: String,
        enum: ['aberto', 'em andamento', 'concluido'],
    },
    local: String,
    observacaoCriador: String,
    observacaoSolucionador: String,
    observacaoAvaliador: String,
    userReport: Schema.Types.ObjectId,
    userResolved: Schema.Types.ObjectId,
    observacao: String
})

autoIncrement.initialize(mongoose.connection)

issueSchema.plugin(autoIncrement.plugin, {
    model: 'Issue',
    field: 'protocolo',
    startAt: 1000,
    incrementBy: 1
});

return mongoose.model('Issue', issueSchema);