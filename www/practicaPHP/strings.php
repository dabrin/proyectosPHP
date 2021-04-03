<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style>
		.resaltar{
			color: #f00;
			font-weight: bold;
		}
	</style>
</head>
<body><?php
	$name="Jose";
	echo "Hi $name";
	echo "<p class='resaltar'>  Esto es una payasada </p>";

	$var1="House";
	$var2="HOUSE";
	$result1=strcmp($var1, $var2);//compara sin tomar en cuenta los UPER CASE.
	$result2=strcasecmp($var1, $var2);//compara tomando en cuenta los UPER CASE.
	echo "Primer res: $result1"."<br>";
	echo "Segundo res: $result2"."<br>";

	if ($result2) {
		echo "Coinciden";
	}else{
	echo "No coinciden";
}
?>
	
</body>
</html>