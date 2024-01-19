function rand(min,max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()*(max-min)+min)
}
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

function esperaA(msg,tempo) {
    return new Promise((resolve, reject)=>{
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
    .then(resposta => {console.log(resposta);})
    .catch();  
