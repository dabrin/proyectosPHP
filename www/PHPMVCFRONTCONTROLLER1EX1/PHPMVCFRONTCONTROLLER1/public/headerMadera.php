<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8"/>
        <title>Sitio ejemplo curso Lenguajes</title>
        <meta name="description" content="Esto es un ejemplo de un sitio web para el curso de Lenguajes"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link rel="shortcut icon" type="image/x-icon" href="img/icono.ico"/>
        <link rel="stylesheet" type="text/css" href="public\css\styles.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        <script type="text/javascript" src="public/js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="public/js/script.js"></script>
        <?php
        require_once 'public/scripts.php';
        ?>
      
      
      
    </head>
    <body>
        <header>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#myNavBar">
                        <span class="navbar-toggler-icon"></span>
                        <span class="navbar-toggler-icon"></span>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="?controlador=User&accion=indexClient">Minisúper Nólep</a>
                    
                    <div class="collapse navbar-collapse" id="myNavBar">
                    <ul class="navbar-nav"> 
                        <li class="nav-item"><a class="nav-link" href="?controlador=Item&accion=insertarMaderaView">Registrar madera</a></li>              
                        <li class="nav-item"><a class="nav-link" href="?controlador=Item&accion=insertarAcabadoView">Registrar acabado</a>
                        <li class="nav-item"><a class="nav-link" href="?controlador=Item&accion=insertarMueble">Registrar Mueble</a></li>
                        <li class="nav-item"><a class="nav-link" href="?controlador=Item&accion=call_listar">  Gestion Muebles</a></li>
                        <li class="nav-item"><a class="nav-link" href="?controlador=Item&accion=agregarCliente">  Ingresar Cliente</a></li>
                         <li class="nav-item"><a class="nav-link" href="?controlador=Item&accion=view_venta">  Ingresar compra</a></li>
                    </ul>      
                     </div>       
                </nav>
        </header>
        
        <section id="contenido">
            <section id="principal">
               
        
   
    