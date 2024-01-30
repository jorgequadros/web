function rand(min,max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()*(max-min)+min)
}


function esperaA(msg,tempo) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            if(typeof msg!== 'string') {
                reject(false);
                return;
            };//se tipo de mensagem for diferente String
             resolve(msg.toUpperCase() +' - Passei na promise.');
        },tempo);
    });
}

//Promise.all Promise.race Promise.resolve Promise.reject
/*const promises = [
    'Primeiro valor',
    esperaA('Promise 1',3000),
    esperaA('Promise 2',500),
    esperaA('Promise 3',1000),
    'Outro valor'
];

const promises1 = [
    esperaA('Promise 1',rand(1,5)),
    esperaA('Promise 2',rand(1,5)),
    esperaA('Promise 3',rand(1,5)),
    esperaA(1000,rand(1,5))
];
*/
//Promise.all com erro só retorna o erro, não mostra os outro resultado
/*Promise.all(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
})*/

//se tiver promises.race resolvido mostra e não executa os outros
//mostra quem chegou primeiro
/*Promise.race(promises1)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
})*/

function baixaPagina(){
    const emCache =true;
    if(emCache){
        return Promise.reject('Página em cache');
    }else{
        return esperaA('Baixei a página',3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('ERRO',e));