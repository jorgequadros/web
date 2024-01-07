fetch('pagina1.html')
.then(reposta=>{
    if(reposta.status !== 200)throw new Error('ERRO 404 NOSSO');
    return resposta.text();
}).then(html=>console.log(html))
.catch(e=>console.error(e));