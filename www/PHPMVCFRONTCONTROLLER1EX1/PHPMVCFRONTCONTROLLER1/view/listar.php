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
		$('#tablaDatatable').load('?controlador=Item&accion=listar');
	});
</script>
	
<?php

include_once 'public/footer.php';

?>