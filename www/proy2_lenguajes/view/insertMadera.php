<?php
 include_once 'public/header_client.php';
?>


<form action="?controlador=Item&accion=insertarMadera" method="POST">
  <div class="form-group">
    <label for="nombre">Nombre:</label>
    <input type="input" class="form-control" id="nombre" name="nombre">
  </div>
  <div class="form-group">
    <label for="costo">Costo:</label>
    <input type="input" class="form-control" id="costo" name="costo">
  </div>
 
  <button type="submit" class="btn btn-default" >REGISTRAR</button>
</form>



