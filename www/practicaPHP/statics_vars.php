<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php
	function incress_var(){

		static $count=0;
		$count++;
		echo $count."<br>";
	}

	incress_var(); 
	incress_var();
	incress_var();
?>
</body>
</html>