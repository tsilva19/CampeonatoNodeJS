const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    idJogo: {
        type: Integer,
        required: true
    },
    nomeTime1:{
        type: String,
        required: true,
    },
    nomeTime2:{
        type: String,
        required: true,
    },
   encerrado:{
       type: Boolean,
       
   },
   golsTime1: {
       type: Integer,

   },

   golsTime2: {
       type: Integer
   }


});

module.exports = mongoose.model('Jogos', schema);
