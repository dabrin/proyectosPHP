<?php
    include_once 'public/header_admin.php';
    
?>



<div class="container-fluid text-center">    
  <div class="row content">
    <div class="col-sm-2 sidenav">
        <p><a href="#">Link</a></p>
        <p><a href="#">Link</a></p>
        <p><a href="#">Link</a></p>
    </div>
    <div class="col-sm-8 text-left"> 
      
		<form class="formulario" name="login" action="?controlador=User&accion=crear_usuario_admin" method="POST" style="text-align:center;">
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
            </div>
                <div class="col-sm-2 sidenav">
                    <div class="well">
                        <p>ADS</p>
                    </div>
                    <div class="well">
                        <p>ADS</p>
                    </div>
                </div>
            </div>
        </div>

        <?php
    include_once 'public/footer.php';
?>




