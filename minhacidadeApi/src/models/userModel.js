const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const findOrCreate = require('mongoose-findorcreate');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    protocolo: Number,
    cpf: String,
    password: String
})

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.plugin(findOrCreate);

return mongoose.model('User', userSchema);