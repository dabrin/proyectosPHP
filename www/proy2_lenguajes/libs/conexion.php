

<?php 
/*
	class conectar{
		public function conexion(){
			$conexion=mysqli_connect('163.178.107.130:3306',
										'laboratorios',
										'UCRSA.118',
										'b54994_Lenguajes_proy2');
			return $conexion;
		}
	}
*/
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