
 <?php require_once 'public/scripts.php'; ?>
<div>
<table class="table table-hover" id="example">
    <thead style="background-color: #114E8F  ;color: white; font-weight: bold;">
    <tr>
    <th>Id Libro</th>
    <th>Carne Estudiante</th>
    <th>Acciones</th>
    </tr>
    </thead>
    <tbody>
    <?php
        foreach ($vars['lista'] as $item){
        
    ?>
    <tr>
        <td><?php echo $item['C_idLibro']; ?></td>
        <td><?php echo $item['C_idUser']; ?></td>
         <td>
         <div>
            <span type="button" onclick="eliminarArticulo('<?php echo $item['C_id'] ?>')">
                <img src="public/img/icons8-botón-de-radio-comprobado-24.png">    
            </span>
        </div>
         <div>
            <span type="button" onclick="eliminarArticulo('<?php echo $item['C_id'] ?>')">
                <img src="public/img/icons8-cancelar-2-24.png">    
            </span>
        </div>
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
