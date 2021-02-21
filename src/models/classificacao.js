const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    idTime: {
        type: Integer,
        required: true
    },
    nomeTime:{
        type: String,
        required: true,
    },
    posicao: {
        type: Integer,
    },
    pontos: {
        type: Integer,
        default: 0,
    },
    vitorias:{
        type: Integer,
        default: 0,

    },
    empates: {
        type: Integer,
        default:0,

    },
    derrotas: {
        type: Integer,
        default: 0
    },
    golsMarcados:{
        type: Integer,
        default: 0
    }




});

module.exports = mongoose.model('Classificacao', schema);
