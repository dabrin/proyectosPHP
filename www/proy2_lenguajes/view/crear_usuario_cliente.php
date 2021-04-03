<?php
    include_once 'public/header_client.php';
    
?>
<div class="contenedor">
		<h1 class="titulo">Regístrate</h1>
		
		<hr class="border">

		<form class="formulario" name="login" action="?controlador=User&accion=crear_usuario_create" method="POST">
			<div class="form-group">
				<input  type="text" name="usuario" placeholder="Usuario">
			</div>
			<div class="form-group">
				<input class="password" type="password" name="password" placeholder="Contraseña">
			</div>
			<div class="form-group">
				<input class="password_btn" type="password2" name="password2" placeholder="Repite la contraseña">
			</div>
			<div class="form-group">
				<input  type="text" name="email" placeholder="Correo">
			</div>
			<div class="form-group">
				<input  type="text" name="cedula" placeholder="Numero de cédula">
			</div>


			
			<input type="submit">

			<!-- Comprobamos si la variable errores esta seteada, si es asi mostramos los errores -->
			<?php if(!empty($errores)): ?>
				<div class="error">
					<ul>
						<?php echo $errores; ?>
					</ul>
				</div>
			<?php endif; ?>
		</form>

		<p class="texto-registrate">
			¿ Ya tienes cuenta ?
			<a href="?controlador=User&accion=indexClient">Iniciar Sesión</a>
		</p>
</div>
<?php
    include_once 'public/footer.php';
?>
