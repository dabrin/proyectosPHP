 <?php
        require_once 'public/scripts.php';
        ?>
<div>
<table class="table table-hover" id="example">
    <thead style="background-color: #dc3545;color: white; font-weight: bold;">
    <tr>
        <th> ID</th>
        <th>Nombre</th>
        <th>Precio</th>
        
       <th> Action</th>
        
    </tr>
  </thead>
<tbody>
    <?php
        foreach ($vars['listado'] as  $item) {
    ?>

    <tr>
            <td>
                <?php echo $item[0] ?>
            </td>
            <td>
                <?php echo $item[1] ?>
            </td>
            <td> <?php echo $item[2] ?></td>
            
            <td>
            <span class="btn btn-danger btn-sm"  onclick="deleteCombo('<?php echo $item[0] ?>')">
					<span class="fa fa-pencil-square-o"></span>
				</span>
                <input type="button" onclick="realizar_para_agregar(<?php echo $item[0]?>)" value="Agregar">
            </td>
            
    </tr>
        <?php } ?>
        </tbody>
</table>
</div>
<input type="text" value="<?php  echo 'sssss'; ?>">
<script type="text/javascript">
$(document).ready(function() {
    $('#example').DataTable();
} );
</script>

