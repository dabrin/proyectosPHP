<?php
	if(isset($_POST["enviando"])){

		$user=$_POST["nombre_usuario"];
		$edad=$_POST["edad_usuario"];

		if($user=="Dabrin"){
			echo "<p class='validado'>Puedes iniciar </p>";
		}else{
			echo "<p class='no_validado'> NO puuedes iniciar </p>";
		}
	}

?>
