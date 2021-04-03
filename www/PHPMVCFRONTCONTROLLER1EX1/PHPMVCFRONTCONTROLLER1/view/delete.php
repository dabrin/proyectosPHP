<?php

include_once 'public/header.php';


?>


<form  method="POST">
  <div class="form-group">
    <label for="codigo">Código:</label>
    <input type="input" class="form-control" id="codigo" name="codigo">
  </div>
 
 
  <button type="submit" class="btn btn-default" onclick="eliminarArticulo($('#codigo').val());">BORRAR</button>
</form>