<?php
include_once 'public/header.php';
?>

<script>
    var estudiantes = <?php echo json_encode($vars); ?>;
</script>
<script src="public/js/script.js" type="text/javascript"></script>

<div class="contact">
    <div class="container">
        <h2>Adivinar recinto de origen</h2>
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
                <h4>Sexo:</h4>
                <select name="sexo" id="sexo">
                    <option value="1">Masculino</option>
                    <option value="2">Femenino</option>
                </select>
                <br><br><br>
                <button class="btn1 btn-1 btn-1b" onclick="adivinarRecinto(estudiantes);">Calcular</button>
                <br><br><br>
                <h4 id="mensaje"></h4>
            </center>
        </div>	
    </div>
</div>

<script src="public/js/view/adivinarRecintoView.js" type="text/javascript"></script>

<?php include_once 'public/footer.php'; ?>