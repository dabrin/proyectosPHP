<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8"/>
        <title>Sitio ejemplo curso Lenguajes</title>
        <meta name="description" content="Esto es un ejemplo de un sitio web para el curso de Lenguajes"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link rel="shortcut icon" type="image/x-icon" href="img/icono.ico"/>
        <link rel="stylesheet" type="text/css" href="public\css\styles.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="public/js/jquery-3.3.1.js"></script>
        <script>
            function realizarProceso(val1,val2) {
                var parametros={
                    "valor1":val1,
                    "valor2":val2
                };
                $.ajax(
                    {
                        data: parametros,
                        url: '?controlador=Item&accion=proceso',
                        type: 'POST',
                        beforeSend:function(){
                            $("#resultado").html("Procesando, \n\ espere por favor...");
                        },
                        success:function (response) {
                            $("#resultado").html(response);
                        }
            
                    }
                );
                
            }
        </script>
    </head>
    <body>
        <header>
         
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="?controlador=Default">Minisúper Nólep</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li><a href="?controlador=Default">Inicio</a></li>
                        <li><a href="?controlador=Item&accion=listar">Listar</a></li>
                        <li>
                            <a href="?controlador=Item&accion=mostrar_formulario">Formulario</a>
                        </li>
                        
        
                        
                    </ul>
                    <form class="navbar-form navbar-left" action="/action_page.php">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search">
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                    </form>
                     </div>
                     <ul class="nav navbar-nav">
                     <li class="cerrar-sesion">
                            <a href="libs/logout.php">Cerrar sesión</a>
                        </li>
                        </ul>
                </nav>
        </header>
        
        <section id="contenido">
            <section id="principal">
               