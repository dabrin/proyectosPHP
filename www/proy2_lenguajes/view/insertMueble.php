<?php

 include_once 'public/header_client.php';


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
</div>


<form action="?controlador=Item&accion=insertarMadera" method="POST">
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
    <input type="input" class="form-control" id="costo" name="costo">
</div>

  
 
  <button type="submit" class="btn btn-default" >REGISTRAR</button>
</form>


<script type="text/javascript">



function ShowSelected() {
    /* Para obtener el valor */
    var cod = document.getElementById("madera").value;
    $("#maderaAdd").val(cod);
    //document.getElementById("costoAdd").value(cod);

    /* Para obtener el texto */
    var combo = document.getElementById("madera");
    var selected = combo.options[combo.selectedIndex].text;

}

function ShowSelectedAcabado() {
    /* Para obtener el valor */
    var cod = document.getElementById("acabado").value;
    $("#AddAca").val(cod);
    //document.getElementById("costoAdd").value(cod);

    /* Para obtener el texto */
    var combo = document.getElementById("acabado");
    var selected = combo.options[combo.selectedIndex].text;

}



function agregarMaderaAcabado(val1, val2) {
    alert(val1.charAt());
    alert(val2.charAt());
    var parametros = {
        "nombreMadera": val1,
        "nombreAcabado": val1

    };
    $.ajax({
        data: parametros,
        url: "?controller=Item&action=obtenerPrecios",
        type: 'POST',
        beforeSend: function () {

        },
        success: function (r) {
            var string;
            var code;
            var datos = jQuery.parseJSON(r);
            var rand = Math.floor(Math.random() * 100000);
            code = val1.charAt() + val2.charAt() + rand;
            string = $("#maderas").val();
            $("#id").val(code);
            $("#maderas").val(string + " ," + val1);
            $("#acabado1").val(val2);
            $("#costo").val(datos['maderaCosto']);
        }

    });
}

</script>