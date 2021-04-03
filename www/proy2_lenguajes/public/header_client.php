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
        <script type="text/javascript" src="public/js/scriptAjax.js"></script>
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
                        <li class="nav-item"><a class="nav-link" href="?controlador=User&accion=crear_usuario_cliente">Crear cliente</a></li>              
                        <li class="nav-item"><a class="nav-link" href="?controlador=Item&accion=listar_arts"> Ver artículos</a>
                        <li class="nav-item"><a class="nav-link" href="?controlador=Combo&accion=ver_combos">  Ver combos</a></li>
                        <li class="nav-item"><a class="nav-link" href="?controlador=User&accion=ver_compras">  Ver Compras</a></li>
                        <li class="class='nav-item cerrar-sesion'"><a class="nav-link" href="libs/logout.php">Cerrar sesión</a></li>
                        <li><a class="nav-link" href="?controlador=Carrito&accion=ver_carrito"><img src="public/img/carrito.png" /> 0 , CRC 0, CRC 0</a></li>
                    </ul>      
                     </div>       
                </nav>
        </header>
        
        <section id="contenido">
            <section id="principal">
               