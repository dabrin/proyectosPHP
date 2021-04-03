<?php

include_once 'public/header.php';


?>


<form  method="POST">
  <div class="form-group">
    <label for="codigo">Código:</label>
    <input type="input" class="form-control" id="codigo" name="codigo">
  </div>
  <div class="form-group">
    <label for="pwd">Nombre:</label>
    <input type="input" class="form-control" id="name" name="name">
  </div>
 
  <button type="submit" class="btn btn-default " onclick="actualizarArticulo($('#codigo').val(), $('#name').val()); ">ACTUALIZAR</button>
</form>