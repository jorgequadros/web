<!-- comentarios-->
<div class="main">
<h1>Estamos em <?php echo date('y'); ?> e hoje é dia <?php echo date('d/m');?> </h1>
    <p>Esta página foi gerada às <?php echo date('H');?> horas e <?php echo date('i');?></p>
<table border=1>
    <tr>
        <th>Domingo</th>
        <th>Segunda</th>
        <th>Terça</th>
        <th>Quarta</th>
        <th>Quinta</th>
        <th>Sexta</th>
        <th>Sábado</th>
    </tr>
    <?php  
    echo calendario();
    
    ?>
    
</table>       
</div>