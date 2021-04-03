<?php
include_once 'public/header.php';
?>

<script>
    var estudiantes = <?php echo json_encode($vars); ?>;
</script>
<script src="public/js/script.js" type="text/javascript"></script>

<div class="contact">
    <div class="container">
        <h2>Adivinar estilo de aprendizaje</h2>
        <div class="contact-form">
            <center>
                <h4>Recinto:</h4>
                <select name="recinto" id="recinto">
                    <option value="1">Turrialba</option>
                    <option value="2">Paraiso</option>
                </select>
                <br><br>
                <h4>Promedio ponderado para matrícula:</h4>
                <input type="text" id="promedio" name="promedio" onkeyup="this.value=restriccionCaracteres(this.value)">
                <br><br>
                <h4>Sexo:</h4>
                <select name="sexo" id="sexo">
                    <option value="1">Masculino</option>
                    <option value="2">Femenino</option>
                </select>
                <br><br><br>
                <button class="btn1 btn-1 btn-1b" onclick="adivinarEstiloAprendizaje(estudiantes);">Calcular</button>
                <br><br><br>
                <h4 id="mensaje"></h4>
            </center>
        </div>	
    </div>
</div>

<script src="public/js/view/adivinarEstiloAprendizajeView.js" type="text/javascript"></script>

<?php include_once 'public/footer.php'; ?>