<?php require 'public/header_admin.php';?>


<div class="jumbotron text-center" style="margin-bottom:0">
  <h1>Gestión de roles.</h1> 
</div>

<div class="container" style="margin-top:30px">
  <div class="row">
    <div class="col-sm-4">
      
      	<form class="formulario" name="login" action="?controlador=User&accion=cliente_log" method="POST">
			<div class="form-group">
				<input  type="text" id="nombre" name="usuario" placeholder="Usuario">
			</div>
			<div class="form-group">
				<input  type="text" id="id" name="id" placeholder="Correo">
			</div>
			<div class="form-group">
				<input  type="text" id="correo" name="correo" placeholder="Edad">
			</div>
			<div> <span ><strong> Permisos: </strong></span></div>
			<div class="form-check">
  			<label class="form-check-label">
    			<input type="checkbox" id="GUser" class="form-check-input"  value="1">Gestión Usuario
  			</label>
			</div>
			<div class="form-check">
				<label class="form-check-label">
					<input type="checkbox" id="GProd" class="form-check-input" value="1">Gestión Productos
				</label>
			</div>
			<div class="form-check">
				<label class="form-check-label">
					<input type="checkbox" id="GInform" class="form-check-input" value="1">Gestión Informes
				</label>
			</div>
				<div class="form-check">
				<label class="form-check-label">
					<input type="checkbox" id="GCombos" class="form-check-input" value="1">Gestión Combos
				</label>
			</div>
				<div class="form-check">
				<label class="form-check-label">
					<input type="checkbox" id="Glista" class="form-check-input" value="1"> Gestión lista deseos
				</label>
			</div>
			<div>
				<input type="submit" >
				<input type="button" value="DFDDD" id="" onclick="agregar_permisos_rol($('#id').val())">			</div>
			</form>
    </div>
    <div id="tabla" class="col-sm-8">
        
    </div>
  </div>
</div>

<?php include_once 'public/footer.php'; ?>
<script type="text/javascript">
    $(document).ready(function(){
		$('#tabla').load('?controlador=Admin&accion=ver_administradores');
	});
</script>