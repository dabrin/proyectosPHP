<?php

include_once 'public/header_admin.php';

?>
<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="card text-left">
					<div class="card-header">
						Lista de combos
					</div>
					<div class="card-body">
						<span class="btn btn-primary" data-toggle="modal" data-target="#newCombo">
							Agregar nuevo <span class="fa fa-plus-circle"></span>
						</span>
						<hr>
						<div id="tablaDatatable"></div>
					</div>
					<div class="card-footer text-muted">
						By Dabrin Nájera

					</div>
				</div>
			</div>
		</div>
		</div>



    </div>
	<script type="text/javascript">
	$(document).ready(function(){
		$('#tablaDatatable').load('?controlador=Combo&accion=ver_combos2');
	});
</script>
		


<?php


include_once 'public/footer.php';


?>

	<div class="modal fade" id="newCombo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Crear combo</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form id="frmnuevoU">
						<input type="text" hidden="" id="codigo" name="idjuego">
						<label>Nombre</label>
						<input type="text" class="form-control input-sm" id="nombre" name="nombre" value="">
						
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
					<button type="button" class="btn btn-success" id="btnActualizar" onclick="createCombo($('#nombre').val())">Crear</button>
				</div>
			</div>
		</div>
	</div>