<?php 
    function primeiralinha(){
        $semana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'];
        $mes = array('Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro');
        $dias = array(31,28,31,30,31,30,31,31,30,31,30,31);
        return "
            <tr>
                <td>{$semana[0]}</td>
                <td>{$semana[1]}</td>
                <td>{$semana[2]}</td>
                <td>{$semana[3]}</td>
                <td>{$semana[4]}</td>
                <td>{$semana[5]}</td>
                <td>{$semana[6]}</td>
            </tr>        
        ";

    }

    

?>