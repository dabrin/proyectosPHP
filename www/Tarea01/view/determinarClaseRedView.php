<?php include_once 'public/header.php'; ?>

<script>
    var redes = <?php echo json_encode($vars); ?>;
</script>

<div class="contact">
    <div class="container">
        <h2>Adivinar estilo de aprendizaje</h2>
        <div class="contact-form">
            <center>
                <h4>Confiabilidad de la red:</h4>
                <input type="number" id="confiabilidad" min="2" max="5" placeholder="2 a 5" required="">
                <br><br>
                <h4>N&uacute;mero de enlaces:</h4>
                <input type="number" id="numeroEnlaces" min="7" max="20" placeholder="7 a 20" required="">
                <br><br>
                <h4>Capacidad de la red:</h4>
                <select name="capacidad" id="capacidad">
                    <option value="1">Baja</option>
                    <option value="2">Media</option>
                    <option value="3">Alta</option>
                </select>
                <br><br>
                <h4>Costo de la red:</h4>
                <select name="costo" id="costo">
                    <option value="1">Baja</option>
                    <option value="2">Media</option>
                    <option value="3">Alta</option>
                </select>
                <br><br><br>
                <button class="btn1 btn-1 btn-1b" onclick="determinarClaseRed(redes);">Calcular</button>
                <br><br><br>
                <h4 id="mensaje"></h4>
            </center>
        </div>	
    </div>
</div>

<script src="public/js/view/determinarClaseRedView.js" type="text/javascript"></script>

<?php include_once 'public/footer.php'; ?>