

<?php 

	class conectar{
		public function conexion(){
			$conexion=mysqli_connect('localhost',
										'root',
										'',
										'lenguajes');
			return $conexion;
		}
	}


 ?>