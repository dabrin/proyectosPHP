<!DOCTYPE html>
<html>
<head>
	<title>Doc</title>
</head>
<body>
	<?php
		print"Bienvenidossss putooos<br>";
		print "Hola prros :V";
		$data=json_decode(file_get_contents("http://dabrin-001-site1.btempurl.com/api/Values"),true);
		print_r($data);
	?>

	
</body>
</html>