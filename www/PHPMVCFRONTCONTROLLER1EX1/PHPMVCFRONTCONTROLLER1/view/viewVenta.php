<?php

include_once 'public/headerMadera.php';

?>

<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="card text-left">
					<div class="card-header">
						Historial de ventas:
					</div>
					<div class="card-body">
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
		$('#tablaDatatable').load('?controlador=Item&accion=listar_venta');
	});x
</script>
<div>
<input type="text" class="form form-control" id="precioCompra" value="0">
<input type="button" value="Comprar" class="btn btn-success" onclick="obtenerPrecio($('#precioCompra').val());" data-toggle="modal" data-target="#comprarModal";>	
	
<?php

include_once 'public/footer.php';

?>


<div class="modal fade" id="comprarModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Agregar a carrito</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form id="frmnuevoU">
						<input type="text" id="codigoA" hidden="">
						<label>Precio</label>
						<input type="text" class="form-control input-sm" id="PrecioA" name="precio" value="" disabled>
						<label>kilometros</label>
						<input type="text" class="form-control input-sm" id="distancia" name="distancia"  >
						
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
					<button type="button" class="btn btn-success" id="btnActualizar" onclick="comprar($('#PrecioA').val(),$('#distancia').val())">Agregar</button>
				</div>
			</div>
		</div>
    </div>