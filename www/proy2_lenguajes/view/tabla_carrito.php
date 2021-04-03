<?php
        require_once 'public/scripts.php';
        ?>
<div>
<table class="table table-hover" id="example">
    <thead style="background-color: #dc3545;color: white; font-weight: bold;">
    <tr>
        <th> ID Carrito</th>
        <th>ID Producto</th>
        <th>Nombre Producto</th>
        <th>Acciones</th>
       
        
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
                <?php echo $item[1] ?>
            </td>
            <td><?php echo $item[2] ?></td>
            <td>
                <span class="btn btn-warning btn-sm"  onclick="updateProd('<?php echo $item[0] ?>')">
					<span class="fa fa-pencil-square-o"></span>
				</span>
                <span class="btn btn-danger btn-sm" onclick="eliminarDeCarrito('<?php echo $item[1]; ?>')">
					<span class="fa fa-trash"></span>
                </span>
                

             
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