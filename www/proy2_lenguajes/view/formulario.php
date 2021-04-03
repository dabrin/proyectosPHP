<?php
    include_once 'public/header.php';    
?>
<label for="valor1"> Ingrese valor 1</label>
<input type="text" name="valor1" id="valor1">

<label for="valor2">Ingrese valor 2</label>
<input type="text" name="valor2" id="valor2">

<label for="buton"></label>
<input type="button" href="javascript:;" onclick="realizarProceso($('#valor1').val() ,$('#valor2').val());return false;" value="Calcular">
<br>
Resultado 
<span id="resultado">0</span>



<?php
    include_once 'public/footer.php';
?>



