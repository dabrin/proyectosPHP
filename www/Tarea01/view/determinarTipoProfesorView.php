<?php
include_once 'public/header.php';
?>

<script>
    var profesores = <?php echo json_encode($vars); ?>;
</script>

<div class="contact">
    <div class="container">
        <h2>Determinar el tipo de profesor</h2>
        <div class="contact-form">
            <center>
                <h4>Edad:</h4>
                <select name="edad" id="edad">
                    <option value="1">No más de 30 años</option>
                    <option value="2">Entre 31 y 55 años</option>
                    <option value="3">Mayor de 55 años</option>
                </select>
                <br><br>
                <h4>G&eacute;nero:</h4>
                <select name="genero" id="genero">
                    <option value="1">Hombre</option>
                    <option value="2">Mujer</option>
                    <option value="3">No disponible</option>
                </select>
                <br><br>
                <h4>Auto-Evaluaci&oacute;n:</h4>
                <select name="autoevaluacion" id="autoevaluacion">
                    <option value="1">Principiante</option>
                    <option value="2">Intermedio</option>
                    <option value="3">Avanzado</option>
                </select>
                <br><br>
                <h4>Veces que ha impartido un curso:</h4>
                <select name="numeroVeces" id="numeroVeces">
                    <option value="1">Nunca</option>
                    <option value="2">De 1 a 5 veces</option>
                    <option value="3">Más de 5 veces</option>
                </select>
                <br><br>
                <h4>Disciplina del profesor:</h4>
                <select name="disciplina" id="disciplina">
                    <option value="1">Toma de decisiones</option>
                    <option value="2">Diseño de redes</option>
                    <option value="3">Other</option>
                </select>
                <br><br>
                <h4>Habilidad usando computadoras:</h4>
                <select name="habilidadPC" id="habilidadPC">
                    <option value="1">Bajo</option>
                    <option value="2">Medio</option>
                    <option value="3">Alto</option>
                </select>
                <br><br>
                <h4>Veces que ha utilizando tecnologías web:</h4>
                <select name="habilidadWeb" id="habilidadWeb">
                    <option value="1">Nunca</option>
                    <option value="2">Aveces</option>
                    <option value="3">A menudo</option>
                </select>
                <br><br>
                <h4>Experiencia utilizando un sitio web:</h4>
                <select name="experienciaWeb" id="experienciaWeb">
                    <option value="1">Nunca</option>
                    <option value="2">Aveces</option>
                    <option value="3">A menudo</option>
                </select>
                <br><br><br>
                <button class="btn1 btn-1 btn-1b" onclick="determinarTipoProfesor(profesores);">Calcular</button>
                <br><br><br>
                <h4 id="mensaje"></h4>
            </center>
        </div>	
    </div>
</div>

<script src="public/js/view/determinarTipoProfesorView.js" type="text/javascript"></script>

<?php include_once 'public/footer.php'; ?>