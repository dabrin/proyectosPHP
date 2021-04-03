<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php
		$num1=rand(12,50);
		echo "El numero es: ".$num1."<br>";
	
		$num2=pow($num1, 2);
		echo "El numero ".$num1." elevado es: ".$num2."<br>";

		$resultado=(int)$num2;
		echo "El numero ".$resultado;
	?>
</body>
</html>