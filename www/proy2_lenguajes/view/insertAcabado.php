<?php

 include_once 'public/header_client.php';


?>


<form action="?controlador=Item&accion=insertarAcabado" method="POST">
  <div class="form-group">
    <label for="codigo">Tipo Acabado:</label>
    <input type="input" class="form-control" id="tipoAcabado" name="tipoAcabado">
  </div>
  <div class="form-group">
    <label for="pwd">Costo por cm3:</label>
    <input type="input" class="form-control" id="costoCm" name="costoCm">
  </div>
 
  <button type="submit" class="btn btn-default" >REGISTRAR</button>
</form>
