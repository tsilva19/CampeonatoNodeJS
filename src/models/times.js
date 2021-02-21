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
   sigla:{
       type: String,
       
   },
   uf: {
       type: String
   }

});

module.exports = mongoose.model('Times', schema);
