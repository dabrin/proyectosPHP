<?php
		include_once 'public/header_client.php';
		require_once 'public/scripts.php';
?>
<div class="contenedor">
		<h1 class="titulo">Iniciar Sesión</h1>
		
		<hr class="border">
	<?php if(isset($errorLog)){
		echo $errorLog;
	} ?>
		<form class="formulario" action="?controlador=User&accion=iniciado"   method="POST">
			<div class="form-group">
				</i><input class="usuario" type="text" name="usuario" placeholder="Usuario">
			</div>

			<div class="form-group">
				<input class="password_btn" type="password" name="password" placeholder="Password">
				
			</div>
			<input type="submit">

			<?php if(!empty($errores)): ?>
				<div class="error">
					<ul>
						<?php echo $errores; ?>
					</ul>
				</div>
				
			<?php endif; ?>
			<span id= "name">!!!!!</span>
		</form>

		<p class="texto-registrate">
			¿ Aun no tienes cuenta ?
			<a href="?controlador=User&accion=crear_usuario_cliente">Regístrate</a>
		</p>
		





		

    <?php
		include_once 'public/footer.php';
		?>

