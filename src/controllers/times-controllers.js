const mongoose = require('mongoose');
const Times = mongoose.model('Times');

exports.listTimes = async (req, res) => {
    try{
        const data = await Times.find({});
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({ message: 'Falha ao listar os times'})
    }
    
};

//Cadastro
exports.createTime = async (req, res) => {
    try {
        const time = new Times({
            idTime: req.body.idTime,
            nomeTime: req.body.nomeTime,
            sigla: req.body.sigla,
            uf: req.body.uf
        });

        console.log(time)

        await time.save();

        res.status(201).send({message: 'Time Cadastrado Com Sucesso!!!'})
    } catch(e){
        res.status(500).send({message: 'Falha ao cadastrar time'});
    }
}