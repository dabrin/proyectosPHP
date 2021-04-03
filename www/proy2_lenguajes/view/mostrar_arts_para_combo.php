<?php

        //require_once 'public/scripts.php';
        

//$id=$_POST["id"];
?>


<input id="id" value="">
<div>
<table class="table table-hover" id="example">
   <thead style="background-color: #dc3545;color: white; font-weight: bold;">
    <tr>
    <tr>
        <th> ID</th>
        <th>Nombre</th>
        <th>Descripcion</th>
        <th>Precio</th>
        <th>Añadir</th>
    </tr></thead>
<tbody>
    <?php
        foreach ($vars['lista'] as  $item) {
    ?>

    <tr>
            <td>
                <?php echo $item[0] ?>
            </td>
            <td>
                <?php echo $item[1] ?>
            </td>
            <td>
                <?php echo $item[2] ?>
            </td>
            <td>
               <?php echo $item[4] ?> 
            </td>
            <td>
            <input type="button"  onclick="add_prod_combo($('#id').val(),'<?php echo $item[0]?>')"; value="Add">
            </td>
            
            
    </tr>
        <?php } ?>
        </tbody>
</table>
</div>
<script type="text/javascript">
$(document).ready(function() {
    $('#example').DataTable();
} );
</script>


<?php


include_once 'public/footer.php';


?>