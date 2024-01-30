function rand(min,max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()*(max-min)+min)
}

//ganbiarra
/* function esperaA(msg,tempo,cb) {
        setTimeout(()=> {
            console.log(msg);;
            if(cb)cb()
        },tempo)
    }
 */

/* esperaA('Frase 1',aleatorio(1,3), function () {
    esperaA('Frase 2',aleatorio(1,3), function(){
        esperaA('Frase 3',aleatorio(1,3));
    });
}); */

//jeito 
function esperaA(msg,tempo) {
    return new Promise((resolve, reject)=>{
        if(typeof msg!== 'string') reject('BAD VALUE');//se tipo de mensagem for diferente String
        setTimeout(()=> {
             resolve(msg);
        },tempo);
    });
}

esperaA('Frase 1',rand(1,3))
    .then(resposta=>{ 
        console.log(resposta); 
        return esperaA('Frase 2', rand(1,3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaA(22222,rand(1,3))
    }).then(resposta=>{
        console.log(resposta);
    }).then(()=>{console.log('Eu foi o último a ser executado!')})
    .catch(e=> {console.log('ERRO: ', e)});  
