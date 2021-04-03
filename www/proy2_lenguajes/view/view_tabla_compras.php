<?php require_once 'public/scripts.php'; ?>
<div>
<table class="table table-hover" id="example">
    <thead style="background-color: #dc3545;color: white; font-weight: bold;">
    <tr>
        <th>Nombre cliente</th>
        <th>Fecha</th>
        <th>Precio</th>
       
        
    </tr>
  </thead>
<tbody>
    <?php
        foreach ($vars['lista'] as  $item) {
    ?>

    <tr>
            <td>
                <?php echo $item[0] ?>
            </td>
            <td>
                <?php echo $item[3] ?>
            </td>
            <td>
               
                <?php echo $item[2] ?>
             
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