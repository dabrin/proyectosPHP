<?php
include_once 'public/header_admin.php';
require 'libs/db.php';

$total_art=count($vars['listado']);

$articulos_x_pagina= 2;

$paginas=ceil($total_art/2); 
?>


 
  
    <h1><?php echo $paginas ?></h1>


  <div class="container-fluid text-center">    
    <div class="row content">
        <div class="col-sm-2 sidenav">


            <table>
                <thead>
                   
                    <th>Nombre Combo </th>
                    <th>Action</th>
                </thead>
            <?php
                foreach ($vars['listado'] as $item) {
                ?>
                <tr>
                    <td>
                      
                      <?php echo $item[1]?>
                    </td>
                    <td>   
                        <input type="button" href="javascript:;" onclick="realizarProceso(<?php echo $item[0]?>);return false;" value="Calcular">
                         
                    </td>
                
                </tr>
                </div>  
                <?php  }?>
            </table>
                    <ul class="pager">
                        <li class="Anterior"><a class="page-link" href="">Previous</a></li>

                        <?php for($i=0; $i<$paginas ;$i++):?>
                            <li class ="page-item">
                                <a class="page-link" href=""><?php echo $i+1?></a>
                            </li>
                        <?php endfor ?>
                        <li class="Siguiente"><a href="#">Next</a></li>
                    </ul>
                    <input type="input" id="resultado" value="">
                   
            </div>
            
        <div class="col-sm-8 text-left"> 
            <form action="?controlador=Item&accion=crear_combo_commit" method="POST"id="form_clase">
                <div class="form-group">
                    <label for="nombre">Nombre:</label>
                    <input type="input" class="form-control" id="name" name="name">
                    <button type="submit" class="btn btn-default">CREAR</button>
                </div>
            </form>
            <label for="nombre">Codigo producto:</label>
            <div><form action="?controlador=Item&accion=combo_art" method="POST">
                <input type="input" class="form-control" id="codeCombo" name="codeCombo">
                <input type="input" class="form-control" id="codeArt" name="codeArt">
                <input type="button" href="javascript:;" onclick="ingresar_combo_art($('#codeCombo').val() ,$('#codeArt').val());return false;" value="Enviar">

            </form>
                
            </div>
<!--
-->
            </div>
            <div class="col-sm-2 sidenav">
            <div class="well">
                <p>ADS</p>
            </div>
            <div class="well">
                <p>ADS</p>
            </div>
            </div>

        
        
        
        </div>
        </div>

        <?php
            include_once 'public/footer.php';
           // crear_combo.php?pagina=<?php echo $_GET['pagina']-1 
           //?controlador=Item&accion=ver_combos?pagina=<?php echo $i+1 ?>
           
    

    
 
  
