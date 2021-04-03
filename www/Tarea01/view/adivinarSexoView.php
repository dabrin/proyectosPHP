<?php
    include_once 'public/header.php';
?>

<script>
    var estudiantes = <?php echo json_encode($vars);?>;
</script>
<script src="public/js/script.js" type="text/javascript"></script>

<div class="contact">
    <div class="container">
        <h2>Adivinar sexo de un estudiante</h2>
        <div class="contact-form">
            <center>
                <h4>Estilo de aprendizaje:</h4>
                <select name="estiloAprendizaje" id="estiloAprendizaje">
                    <option value="1">Divergente</option>
                    <option value="2">Convergente</option>
                    <option value="3">Asimilador</option>
                    <option value="4">Acomodador</option>
                </select>
                <br><br>
                <h4>Promedio ponderado para matrícula:</h4>
                <input type="text" id="promedio" name="promedio" onkeyup="this.value=restriccionCaracteres(this.value)">
                <br><br>
                <h4>Recinto:</h4>
                <select name="recinto" id="recinto">
                        <option value="1">Turrialba</option>
                        <option value="2">Paraiso</option>
                    </select>
                <br><br><br>
                <button class="btn1 btn-1 btn-1b" onclick="adivinarSexo(estudiantes);">Calcular</button>
                <br><br><br>
                <h4 id="mensaje"></h4>
            </center>
        </div>	
    </div>
</div>

<script src="public/js/view/adivinarSexoView.js" type="text/javascript"></script>

<?php include_once 'public/footer.php'; ?>