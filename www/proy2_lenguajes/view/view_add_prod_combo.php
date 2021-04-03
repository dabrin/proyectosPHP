
<?php

include_once 'public/header_admin.php';

?>

<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="card text-left">
					<div class="card-header">
						Lista de combos 1
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
		$('#tablaDatatable').load('?controlador=Item&accion=agregar_prod_a_combo');
	});
</script>
		
	