<?php
include_once 'public/header.php';
?>

Ingrese el valor 1: 
<input type="text" name="valor1" id="valor1">

Ingrese el valor 2: 
<input type="text" name="valor2" id="valor2">

Realizar suma:
<input type="button" href="javascript:;" onclick="realizarProceso($('#valor1').val(),
            $('#valor2').val()); return false" value="Calcular">
<br>
Resultado:  <span id="resultado">0</span>


<?php
include_once 'public/footer.php';
?>