<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8"/>
        <title>Sitio ejemplo curso Lenguajes</title>
        <meta name="description" content="Esto es un ejemplo de un sitio web para el curso de Lenguajes"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link rel="shortcut icon" type="image/x-icon" href="img/icono.ico"/>
        <link rel="stylesheet" type="text/css" href="public/css/estilo.css"/>
         <link rel="stylesheet" type="text/css" href="public\css\styles.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        <script type="text/javascript" src="public/js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="public/js/ajax.js"></script>
        <?php
        require_once 'public/scripts.php';
        ?>
      
      
        
    </head>
    <body>
        <header>
         
                
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <a class="navbar-brand" href="#"> <img alt="Curso Lenguajes" src="public/img/firma-ucr-ico.png" width="130" height="60"/></a>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="?controlador=Item&accion=call_listar">Solicitud de libros</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="?controlador=Item&accion=call_listar">Recomendacion de compras</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Exit</a>
                    </li>
                 </ul>
            </nav>
        </header>

        <section id="contenido">
            <section id="principal">
