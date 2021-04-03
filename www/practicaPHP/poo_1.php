<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

	<?php
		require("vehiculo.php");

		$Ferrari=new Car();
		$Pegaso=new Camion();

		echo "Las ruedas del vehiculo son ".$Ferrari->quant_of_wheels."<br>";

		echo "Las ruedas del vehiculo son ".$Pegaso->quant_of_wheels."<br>";

		$Pegaso->setColor("Rojo","");

	?>
</body>
</html>