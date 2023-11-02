<!-- comentarios-->
<div class="main">
<h1>Estamos em <?php echo date('y'); ?> e hoje é dia <?php echo date('d/m');?> </h1>
    <p>Esta página foi gerada às <?php echo date('H');?> horas e <?php echo date('i');?></p>
<table border=1>
    <tr>
        <td>Domingo</td>
        <td>Segunda</td>
        <td>Terça</td>
        <td>Quarta</td>
        <td>Quinta</td>
        <td>Sexta</td>
        <td>Sábado</td>
    </tr>
    <?php  
    echo calendario();
    
    ?>
    
</table>       
</div>