<?php

include_once 'public/headerMadera.php';


?>



<div class="row">

<div class="form-group col-sm-6">
  <label for="sel1">Seleccionar Madera:</label>
  <select id="madera" class="form-control col-sm-6" onchange="ShowSelected();">
   <?php
        foreach ($vars['listado'] as $item){
        
    ?>
    <option><?php echo $item[0] ?></option>
        <?php }?>
  </select>
<input type="input" hidden class="form-control col-sm-6" id="idMaera" name="idMaera" placeholder="Madera">

<input type="input" class="form-control col-sm-6" id="maderaAdd" name="maderaAdd" placeholder="Madera">
<input type="input" class="form-control col-sm-6" id="pulgadas" name="pulgadas" placeholder="Pulgadas" >

</div>

<div class="form-group col-sm-6">
  <label for="sel1">Seleccionar Acabado:</label>
  <select id="acabado" class="form-control col-sm-6" onchange="ShowSelectedAcabado();">
   <?php
        foreach ($vars['lista'] as $item){
        
    ?>
    <option><?php echo $item[0] ?></option>
        <?php }?>
  </select>
<input type="input" class="form-control col-sm-6" id="AddAca" name="costoAdd" placeholder="Acabado">
<input type="input" class="form-control col-sm-6" id="costoAddAca" name="costoAdd" placeholder="cm3" >

</form>

</div>

<button type="submit" class="btn btn-default" onclick="agregarMaderaAcabado($('#maderaAdd').val(), $('#AddAca').val());" >Agregar</button>
<button type="submit" class="btn btn-default" onclick="agregarMadera($('#maderaAdd').val());" >Agregar maderas</button>
</div>


<form action="?controlador=Item&accion=insertarMuebleRealizar" method="POST">
  <div class="form-group">
    <label for="nombre">Código:</label>
    <input type="input" class="form-control" id="id" name="id">
  </div>
  <div class="form-group">
    <label for="costo">Nombre:</label>
    <input type="input" class="form-control" id="nombre" name="nombre">
  </div>
 <div class="form-group">
    <label for="costo">Maderas:</label>
    <input type="input" class="form-control" id="maderas" name="maderas">
  </div>
<div class="form-group">
    <label for="costo">Acabado:</label>
    <input type="input" class="form-control" id="acabado1" name="acabado1">
</div>
<div class="form-group">
    <label for="costo">Costo:</label>
    <input type="input" class="form-control" id="costo" name="costo" placeholder="ingresar costo">
</div>

  
 
  <button type="submit" class="btn btn-default" >REGISTRAR</button>
</form>
