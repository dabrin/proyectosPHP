<?php
    include_once 'public/header_client.php';  
?>
 <article id="descripcion">

 <h1>Bienvenido <?php echo $_SESSION['user']; ?>!!!!<br> a nuestra tienda en línea,<br> donde puedes hacer las compras de manera<br> segura, eficiente y al mejor precio!!!!!!!</h1>
    
                      
</article> 
    

  
<div class="container text-center">    
  <h3>What We Do</h3><br>
  <div class="row">
    <div class="col-sm-5">
      <img src="public/img/descarga1.jpg" class="img-responsive" style="width:100%" alt="Image">
      <p>Current Project</p>
    </div>
    <div class="col-sm-5"> 
      <img src="public/img/teclado1.jpg" class="img-responsive" style="width:100%" alt="Image">
      <p>Project 2</p>    
    </div>
  </div>
  <div class="row">
      <div class="well col-sm-5">
       <p>Agregar funcionalidad, ver carrito</p>
      </div>
      <div class="well col-sm-5">
       <p>Agregar funcionalidad, buscar articulos</p>
      </div>
    </div>
</div><br>

<?php
    include_once 'public/footer.php';
?>


