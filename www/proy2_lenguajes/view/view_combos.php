<?php require 'public/header_client.php';
$var=1;
?>


<div class="row">
    <?php
    foreach ($vars['lista'] as $item) {?>
        <div class="col-md-4">
            <div class="card" style="width:190px; height:320px; ">
                    <img class="card-img-top" src="public\img\Combo.png" alt="Lights"  style="width:130px; height:100px; ">
                    <div class="card-body">
						<p class="card-text">Precio: CRC <?php echo $item[2];?></p>
						<a href="#" class="btn btn-primary" <?php echo "onclick=obtener_carrito('".$_SESSION['id']."','".$item[0]."')";?> data-toggle="modal" data-target="#addCarrito">Agregar a carrito</a>
						<a href="#" class="btn btn-success" >Agregar a deseos</a>
						<input type="button" value="Comprar" class="btn btn-success" <?php echo "onclick=obtener_carrito_compra('".$_SESSION['id']."','".$item[0]."')";?> data-toggle="modal" data-target="#comprarModal";>						
                        
                    </div>
            </div>
            
  		</div>
       
    <?php } ?>
 </div>

 <?php require 'public/footer.php';?>
 <div class="modal fade" id="comprarModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Completar compra</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form id="frmnuevoU">
						
						<input type="text" hidden="" id="codigo" name="idjuego">
						<label>Nombre</label>
						<input type="text" class="form-control input-sm" id="nombre" name="nombre" value="" disabled>
						<label>Precio</label>
						<input type="text" class="form-control input-sm" id="precio" name="descripcion" disabled>
						
						<input type="text" class="form-control input-sm" id="id_combo1" name="precio" hidden disabled> 
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
					<button type="button" class="btn btn-success" id="btnActualizar" onclick="comprar_combo('<?php echo $_SESSION['id']?>',$('#precio').val())">Comprar</button>
				</div>
			</div>
		</div>
	</div>


    <div class="modal fade" id="addCarrito" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
						<label>Nombre</label>
						<input type="text" class="form-control input-sm" id="nombreA" name="nombre" value="" disabled>
						<label>Precio</label>
						<input type="text" class="form-control input-sm" id="precioA" name="precio" disabled >
						<input type="text" class="form-control input-sm" id="id_carrito" name="precio" disabled>
                        <input type="text" class="form-control input-sm" id="combo" name="precio" disabled>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
					<button type="button" class="btn btn-success" id="btnActualizar" onclick="realizarProcesoAgregarComboCarrito($('#id_carrito').val(),$('#codigoA').val())">Agregar</button>
				</div>
			</div>
		</div>
    </div>