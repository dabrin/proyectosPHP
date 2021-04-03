

 <?php require_once 'public/scripts.php'; ?>
<div>
<table class="table table-hover" id="example">
    <thead style="background-color: gray;color: white; font-weight: bold;">
    <tr>
    <th>ID</th>
    <th>Item</th>
    
    <th>Madera</th>
    <th>Precio</th>
    <th>Acciones</th>
    </tr>
    </thead>
    <tbody>
    <?php
        foreach ($vars['listado'] as $item){
        
    ?>
    <tr>
        <td><?php echo $item[0]; ?></td>
        <td><?php echo $item[1]; ?></td>
        <td><?php echo $item[2]; ?></td>
        <td><?php echo $item[3]; ?></td>
         <td>
            <span class="btn btn-success btn-sm"  onclick="comprarMueble('<?php echo $item[3] ?>')">
					<span class="fa fa-shopping-cart "></span>
				</span>
            </td>
    </tr>
    <?php
        }
    ?>

    </tbody>
</table>
</div>

<script type="text/javascript">
$(document).ready(function() {
    $('#example').DataTable();
} );
</script>
