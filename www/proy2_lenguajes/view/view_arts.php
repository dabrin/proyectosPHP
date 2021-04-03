<?php require 'public/header_client.php';?>
<input type="" id="compra">

<?php $var=1;?>
<div class="row">
    <?php
    foreach ($vars['lista'] as $item) {?>
        <div class="col-md-4">
            <div class="card" style="width:190px; height:300px; ">
                    <img class="card-img-top" src="public/img/<?php echo $item[3];?>" alt="Lights"  style="width:130px; height:100px; ">
                    <div class="card-body">
					<p class="card-text"><?php echo $item[0] .', CRC '. $item[4];?></p>
					<a href="#" class="btn btn-primary" <?php echo "onclick=realizarProcesoParaAgregarCarrito('".$_SESSION['id']."','".$item[0]."')";?> data-toggle="modal" data-target="#addCarrito" >Agregar a carrito</a>
					<a href="#" class="btn btn-success" >Agregar a deseos</a>
					<input type="button" value="Comprar" class="btn btn-success" <?php echo "onclick=agregarParaComprar('".$item[0]."')";?> data-toggle="modal" data-target="#comprarModal"><br><br>						
                    </div>
            	</div> 
  			</div>
    <?php } ?>
 </div>

<?php require 'public/footer.php'; ?>
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
						<label>Descripcion</label>
						<input type="text" class="form-control input-sm" id="descripcion" name="descripcion" disabled>
						<label>Precio</label>
						<input type="text" class="form-control input-sm" id="precio" name="precio"disabled> 
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
					<button type="button" class="btn btn-success" id="btnActualizar" onclick="realizarProcesoCompra('<?php echo $_SESSION['id']?>',$('#codigo').val(),$('#precio').val())">Comprar</button>
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
						<input type="text" id="ID_Carrito" hidden="">
						<input type="text"  id="codigoA" name="idjuego" hidden="">
						<label>Nombre</label>
						<input type="text" class="form-control input-sm" id="nombreA" name="nombre" value="" disabled>
						<label>Descripcion</label>
						<input type="text" class="form-control input-sm" id="descripcionA" name="descripcion" disabled>
						<label>Precio</label>
						<input type="text" class="form-control input-sm" id="precioA" name="precio"disabled >
						<input type="text" class="form-control input-sm" id="carrito" name="precio" disabled>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
					<button type="button" class="btn btn-success" id="btnActualizar" onclick="realizarProcesoAgregarCarrito($('#ID_Carrito').val(),$('#codigoA').val())">Agregar</button>
				</div>
			</div>
		</div>
    </div>
    
    <script type="text/javascript">

    </script>