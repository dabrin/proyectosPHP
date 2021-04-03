<?php

include_once 'public/header.php';


?>


<form action="?controlador=Pelicula&accion=insertGenero" method="POST">
  <div class="form-group">
    <label for="codigo">Código:</label>
    <input type="input" class="form-control" id="codigo" name="codigo">
  </div>
  <div class="form-group">
    <label for="pwd">Nombre:</label>
    <input type="input" class="form-control" id="name" name="name">
  </div>
 
  <button type="submit" class="btn btn-default" onclick="insertarArticulo($('#codigo').val(), $('#name').val());" >REGISTRAR</button>
</form>