<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php
		$name="Dabrin";

		function time_on(){
			global $name;
			 $name="El nombre es ". $name;
			 //echo $name;
		}

		time_on();

		echo $name;

	?>

</body>
</html>