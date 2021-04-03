 <?php
        require_once 'public/scripts.php';
        ?>
<div>
<table class="table table-hover" id="example">
    <thead style="background-color: #dc3545;color: white; font-weight: bold;">
    <tr>
        <th> Nombre usuario</th>
        <th>id usuario</th>
        <th>Correo</th>
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
            <span class="btn btn-danger btn-sm"  onclick="ver_admin('<?php echo $item[1] ?>')">
				<span class="fa fa-pencil-square-o"></span>
            </span>
                
            </td>
            
    </tr>
        <?php } ?>
        </tbody>
</table>
</div>
<input type="text" value="<?php if(isset( $_POST['id']))echo $_POST['id']?>">
<script type="text/javascript">
$(document).ready(function() {
    $('#example').DataTable();
} );
</script>

