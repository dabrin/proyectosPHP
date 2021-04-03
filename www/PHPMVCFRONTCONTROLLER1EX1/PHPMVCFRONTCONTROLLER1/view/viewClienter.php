<?php
    include_once 'public/headerMadera.php';
?>


<form method="POST" action="?controlador=Item&accion=agregarClienteFunc">
  <div class="form-group">
    <label for="nombre">Nombre:</label>
    <input type="input" class="form-control" id="nombre" name="nombre">
  </div>
  <div class="form-group">
    <label for="cedula">Cedula:</label>
    <input type="input" class="form-control" id="cedula" name="cedula">
  </div>
  <div class="form-group">
    <label for="direccion">Direccion:</label>
    <input type="input" class="form-control" id="direccion" name="direccion">
  </div>
  <button type="submit" class="btn btn-default">Agregar Cliente</button>
</form>