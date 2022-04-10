const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');

const HomeScrema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = mogoose.model('Home', HomeScrema);

module.exports = HomeModel;