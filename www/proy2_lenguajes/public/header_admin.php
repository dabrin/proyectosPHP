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
                    <a class="navbar-brand" href="?controlador=User&accion=indexUser">Minisúper Nólep</a>
                    
                    <div class="collapse navbar-collapse" id="myNavBar">
                    <ul class="navbar-nav"> 
                        <li class="nav-item"><a class="nav-link" href="?controlador=User&accion=crear_usuario">Crear Usuario</a></li>
                        <li class="nav-item"><a class="nav-link" href="?controlador=Admin&accion=crear_rol">Gestión Roles</a></li>
                        <li class="nav-item"><a class="nav-link" href="?controlador=Item&accion=actualizar">Gestion de productos</a></li>
                        <li class="nav-item"><a class="nav-link" href="?controlador=Combo&accion=view_tabla">Crear combo</a></li>
                        <li class="nav-item"><a class="nav-link" href="?controlador=User&accion=ver_historial"> Ver historial </a></li>
                        <li class="class='nav-item cerrar-sesion'">
                        <a class="nav-link" href="libs/logout.php">Cerrar sesión</a>
                        </li>
                           
                    </ul>      
                     </div>       
                </nav>
     
        </header>
        
        <section id="contenido">
        <?php if(!isset($_SESSION['user'])){
            session_start();
        } ?>
        <h3> Nombre usuario: <?php echo $_SESSION['user']?> </h3>
        <span> Código: <?php echo $_SESSION['id']?> </span> <br>    
        <span> Correo: <?php echo $_SESSION['correo']?> </span> <br>   
        <span> Tipo usuario: <?php echo $_SESSION['t_user']?> </span> 

        <span>
            <br> Permisos: <br>
            <?php echo $_SESSION['GUser']?><br>
            <?php echo $_SESSION['GProd']?><br>
            <?php echo $_SESSION['GInformes']?><br>
            <?php echo $_SESSION['GCombos']?><br>
            <?php echo $_SESSION['GLista']?><br>

        </span>   
    
        <section id="principal">
               