<form action="">
    <fieldset>
        <legend>Nova Tarefa:</legend>
        <label>
            <input type="text" name="nome" id="">
        </label>
        <label>
            Descrição (Opcional):
            <textarea name="descricao" id="" ></textarea>
        </label>
        <label for="">
            Prazo (Opcional):
            <input type="text" name="prazo" id="">
        </label>
        <fieldset>
            <legend>Prioridade</legend>
            <label>
                <input type="radio" name="prioridade" id="" value="baixa">Baixa
                <input type="radio" name="prioridade" id="" value="media">Média
                <input type="radio" name="prioridade" id="" value="alta">Alta
            </label>
        </fieldset>
        <label>
            Tarefa Concluída:
            <input type="checkbox" name="concluida" value="sim" id="">
        </label>
        <input type="submit" value="Cadastrar">
    </fieldset>
</form>
<?php

/*
$tarefa =['nome'=> 'Comprar Cebolas',
          'prioridade' =>'urgente'];

if(array_key_exists('nome',$_GET)){
    echo "Nome Informado: ". $_GET['nome'];
};

if (isset($tarefa['nome'])){
    echo "A tarefa {$tarefa['nome']}.</br>";
}else{
    echo 'A Não tem tarefa Cadastrada.</<br>>';
};

if (isset($tarefa['prioridade'])){
    echo 'A tarefa tem uma prioridade definida.';
}else{
    echo 'A tarefa Não tem uma prioridade definida.';
};*/
session_start();

if(array_key_exists('nome', $_GET) && $_GET['nome']!=''){
    $tarefa=[];

    $tarefa['nome']=$_GET['nome'];

    if(array_key_exists('descricao',$_GET)){
        $tarefa['descricao']=$_GET['descricao'];
    }else{
        $tarefa['descricao']='';
    }

    if(array_key_exists('prazo',$_GET)){
        $tarefa['prazo']=$_GET['prazo'];
    }else{
        $tarefa['prazo']='';
    }

    $tarefa['prioridade']=$_GET['prioridade'];

    if(array_key_exists('concluida',$_GET)){
        $tarefa['concluida']=$_GET['concluida'];
    }else{
        $tarefa['concluida']='';
    }

    $_SESSION['lista_tarefas'][] = $tarefa;

    $lista_tarefas=[];
    $lista_tarefas=$_SESSION['lista_tarefas'];
}


?>

<table>
    <tr>
        <th>Tarefas</th>
        <th>Descrição</th>
        <th>Prazo</th>
        <th>Prioridade</th>
        <th>Concluída</th>
    </tr>
    <?php foreach ($lista_tarefas as $tarefa) :?>
    <tr>
        <td><?php echo $tarefa['nome'];?></td>
        <td><?php echo $tarefa['descricao'];?></td>
        <td><?php echo $tarefa['prazo'];?></td>
        <td><?php echo $tarefa['prioridade'];?></td>
        <td><?php echo $tarefa['concluida'];?></td>
    </tr>
    <?php endforeach; ?>
</table>

