

<table class="table table-striped table-bordered" id="example" class="col-sm-3">
<thead style="background-color: #dc3545;color: white; font-weight: bold;">
    <tr>
        <th> ID</th>
        <th>Nombre</th>
        <th>Descripcion</th>
        <th>Imagen</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Editar</th>
        <th>Eliminar</th>
    </tr>
</thead>
<tbody >
    <?php
        foreach ($vars['listado'] as  $item) {
    ?>
    <tr>
            <td>
                <?php echo $item[0]; ?>
            </td>
            <td>
                <?php echo $item[1];?>
            </td>
            <td>
                <?php echo $item[2];?>
            </td>
            <td>
           <img src="public/img/<?php echo $item[3]?>" alt="Lights" style="width:100px; height:100px">
            </td>
            <td>
               <?php echo $item[4]; ?> 
            </td>
            <td ><?php echo $item[5]; ?></td>
            <td style="text-align: center;">
				<span class="btn btn-warning btn-sm"  onclick="updateProd('<?php echo $item[0] ?>')">
					<span class="fa fa-pencil-square-o"></span>
				</span>
			</td>
			<td style="text-align: center;">
				<span class="btn btn-danger btn-sm" onclick="deleteProd('<?php echo $item[0]; ?>')">
					<span class="fa fa-trash"></span>
			    </span>
			</td>
            
    </tr>
        <?php } ?>
        </tbody >
</table>

<script type="text/javascript">
$(document).ready(function() {
    $('#example').DataTable();
} );
</script>



<?php





?>