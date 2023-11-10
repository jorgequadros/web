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

if(array_key_exists('nome', $_GET)){
    $_SESSION['lista_tarefas'][] = $_GET['nome'];
}

$lista_tarefas=[];

if(array_key_exists('lista_tarefas', $_SESSION)){
    $lista_tarefas= $_SESSION['lista_tarefas'];
}
?>

<table>
    <tr><th>Tarefas</th></tr>
    <?php foreach ($lista_tarefas as $tarefa) :?>
    <tr><td><?php echo $tarefa;?></td></tr>
    <?php endforeach; ?>
</table>

