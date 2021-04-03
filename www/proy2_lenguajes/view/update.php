<?php

include_once 'public/header_admin.php';


?>


</form>
	<div class="container">
		<div class="row">
    	
      <div class="col-sm-6">
		<h3>Actualizar producto:
		</h3>
<form action="?controlador=Item&accion=actualizar_commit" method="POST" >
  <div class="form-group">
    <label for="codigo">Código:</label>
    <input type="input" class="form-control" id="codigo" name="codigo" readonly>
  </div>
  <div class="form-group">
    <label for="pwd">Nombre:</label>
    <input type="input" class="form-control" id="nombre" name="nombre">
	</div>
	<div class="form-group">
    <label for="codigo">Descripcion:</label>
    <input type="input" class="form-control" id="descripcion" name="descripcion">
  </div>
  <div class="form-group">
    <label for="pwd">Precio:</label>
    <input type="input" class="form-control" id="precio" name="precio">
  </div>
 
<button type="submit" class="btn btn-default">ACTUALIZAR</button>
</form>
</div>
<div class="col-sm-6">
		<h3>Ingresar producto:
		</h3>
<form action="?controlador=Item&accion=registrar_commit" method="POST" enctype="multipart/form-data">
  <div class="form-group">
    <label for="codigo">Código:</label>
    <input type="input" class="form-control" id="codigo" name="codigo">
  </div>
  <div class="form-group">
    <label for="nombre">Nombre:</label>
    <input type="input" class="form-control" id="name" name="name">
  </div>
   <div class="form-group">
    <label for="descripcion">Descripcion:</label>
    <input type="input" class="form-control" id="descripcion" name="descripcion">
  </div>
   <div class="form-group">
    <label for="urlImg">Imagen:</label>
    <input type="file" class="form-control" id="urlImg" name="urlImg">
  </div>
  <div class="form-group">
    <label for="precio">Precio:</label>
    <input type="input" class="form-control" id="precio" name="precio">
  </div>
  <div class="form-group">
    <label for="cantidad">Precio:</label>
    <input type="input" class="form-control" id="cantidad" name="cantidad">
  </div>
 
  <button type="submit" class="btn btn-default">REGISTRAR</button>
</form>

</div>

		<div id="tablaDatatable" class="col-sm-9"></div>
					
		
 
	



	
</div>



<script type="text/javascript">
	$(document).ready(function(){
		$('#tablaDatatable').load('?controlador=Item&accion=listar');
	});
</script>
<?php

include_once 'public/footer.php';


?>

