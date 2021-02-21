const mongoose = require('mongoose');
const Times = mongoose.model('Times');
const Jogos = mongoose.model('Jogos');

exports.listTimes = async (req, res) => {
    try{
        const data = await Times.find({});
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({ message: 'Falha ao listar os times'})
    }
    
};

//Cadastro
exports.createJogos = async (req, res) => {

    
    try {

        const times = await Times.find({});
        //var all1 = [times];
        //var all2 = [times];

        t = times.length;
        m = times.length/2;

        rodada = 0;
        for(i = 0; i < t -1 ; i++){
            rodada = i + 1;
            for(j = 0; j < m; j++){
                //Teste para ajustar mando de campo
                time1 = new Times;
                time2 = new Times;
                if(j % 2 == 1 || i % 2 == 1 && j == 0 ){
                    time1 = times[times.length - t + j + 1];
                    time2 = times[times.length - j];
                } else {
                    time1 = times[times.length - j];
                    time2 = times[times.length - t + j + 1];
                }
                if(time1==null) {
                    console.log('Time 1 nullo')
                }
            }

            var jogos = new Jogos({
                idJogo: rodada,
                nomeTime1: time1.nomeTime,
                nomeTime2: time2.nomeTime,
                encerrado,
                golsTime1,
                golsTime2,
            });
        }

       

        console.log(jogos)

        await jogos.save();

        res.status(201).send({message: 'Jogos Cadastrado Com Sucesso!!!'})
    } catch(e){
        res.status(500).send({message: 'Falha ao gerar jogos'});
    }
}