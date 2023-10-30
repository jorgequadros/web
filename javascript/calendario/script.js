var mes = Array("Janeiro"," Fevereiro"," Março"," Abril"," Maio","Junho","Julho"," Agosto","Setembro","Outubro"," Novembro"," Dezembro");
var semana = Array("Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado");
var dias = Array(31,28,31,30,31,30,31,31,30,31,30,31);
var dia =1;

data = new Date();
primeiroMes = new Date(data.getFullYear(),data.getMonth(),"1",);

function meses() {
    var index = parseInt(data.getMonth());
    return semana[data.getDay()]+"" +data.getDate()+"" +mes[index]+"" +data.getFullYear();
}

function tabela(id) {
    for (let j = 0; j <= 5; j++) {
        
		var tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];        
        var linha = document.createElement('tr');
		
		index = parseInt(data.getMonth());

		for (let i = 0; i < 7; i++) {
			
			if(i>=primeiroMes.getDay() || dia> primeiroMes.getDay()){
				
				if (dia>=1 && dia<=dias[index]){
				
					if(dia==data.getDate()){
				
						var coluna = document.createElement('TD');
						coluna.innerHTML="<b>"+dia+"</b>";
						linha.appendChild(coluna);
						
					}else{
				
						var coluna = document.createElement('TD');
						coluna.appendChild(document.createTextNode(dia));  
						linha.appendChild(coluna);
						
					}
				}

				dia++;

			}else{
		
				var coluna = document.createElement('TD');
				coluna.appendChild(document.createTextNode(""));  
				linha.appendChild(coluna);

			}
			
		}
		
        tbody.appendChild(linha);
    }
}
