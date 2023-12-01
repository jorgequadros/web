var i = 0
var reg = 0

function carrega(){
    document.getElementById('rodape').innerHTML="Número Total de Registro: 0"
}

function Adicionar(id, Campo1, Campo2){

    var tbody = document.getElementById(id).getElementsByTagName("TBody")[0]
    var Codigo = document.getElementById(Campo1).value
    var Nome = document.getElementById(Campo2).value
    var linha = document.createElement("tr")
    var celula1 = document.createElement("td")
    
    if (Codigo == "" || Nome == ""){
        alert("Campos vazios!!")
    }else{
        reg++
        celula1.appendChild(document.createTextNode(Codigo))
        celula1.setAttribute('id',Codigo)
        
        var celula2 = document.createElement("td")

        celula2.setAttribute('id',Nome)
        celula2.appendChild(document.createTextNode(Nome))

        var celula3 = document.createElement("td")
        var btAterar = document.createElement("Button")
        var respAlterar ="AlterarCampo('"+Codigo+"','"+Nome+"')"

        btAterar.setAttribute('id','alterar')
        btAterar.setAttribute('type','button')
        btAterar.setAttribute('onClick', respAlterar)
        btAterar.appendChild(document.createTextNode('Alterar')) 
            
        var btExcluir = document.createElement("Button")

        btExcluir.setAttribute('type','button')
        btExcluir.setAttribute('id','excluir')

        var respExcluir ='Excluir(this.name)'
            
        btExcluir.setAttribute('onclick', respExcluir)
        btExcluir.setAttribute('name', i)
        btExcluir.appendChild(document.createTextNode('Excluir')) 
        i++
        celula3.appendChild(btAterar)
        celula3.appendChild(btExcluir)

        linha.appendChild(celula1)
        linha.appendChild(celula2)
        linha.appendChild(celula3)

        tbody.appendChild(linha)

        document.getElementById('rodape').innerHTML= "Número Total de Registro: " + reg

        LimpaCampos()
    }

}

function LimpaCampos(){
     
    var btIncluir ="Adicionar('tabela','Codigo','Descricao')"

    document.getElementById('Codigo').value=""
    document.getElementById('Descricao').value=""
    
    var botao = document.getElementById('Incluir')

    botao.setAttribute('value','Incluir') 
    botao.setAttribute('onclick',btIncluir)

    var Campo1 = document.getElementById('Codigo')

    Campo1.disabled = false  

    

}

function AlterarCampo(Id, Nome){
    
    document.getElementById('Codigo').value = Id
    document.getElementById('Descricao').value = Nome
    
    var btSalvar = "SalvarCampo()"
    var botao = document.getElementById('Incluir')
 
    botao.setAttribute('value','Salvar')
    botao.setAttribute('onClick',btSalvar)
    
    var Campo1 = document.getElementById('Codigo')
 
    Campo1.disabled = true  

}

function SalvarCampo(){

    var codigo = document.getElementById('Codigo')
    var descricao = document.getElementById('Descricao')
    var array = document.getElementsByTagName('tr')
    
    for (let index = 2; index < array.length; index++) {

        var codTabela = array[index].getElementsByTagName('td')[0]
        var conteudo = array[index].getElementsByTagName('td')[1]
                        
        if (codigo.value==codTabela.innerText){
            conteudo.setAttribute('id',descricao.value)
            conteudo.innerText=descricao.value
        }               
    }

    LimpaCampos()

}

function Excluir(index){
    
    i=parseInt(index)+2
    
    var tr = document.getElementsByTagName('tr').length
    
    if(i==tr){
        i--        
    }

    if(i>1){
        document.getElementById('tabela').deleteRow(i)
        reg--
        i--
    }

    document.getElementById('rodape').innerHTML= "Número Total de Registro: " + reg

}