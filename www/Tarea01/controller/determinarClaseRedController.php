<?php
    class determinarClaseRedController {
        
        function __construct() {
            $this->view = new View();
        }//Fin del constructor.

        function determinarClaseRedAction() {
            require 'model/RedModel.php';
            require 'public/domain/Red.php';

            $redModel = new RedModel();
            $redes = $redModel->obtenerTodasLasRedes();
            $this->view->show("determinarClaseRedView.php", $redes);
        }/* Fin de la función determinarClaseRedAction, que obtiene todos los registros 
        de los estudiantes almacenados en la BD y los envía a la vista. */
        
    }//Fin de la función determinarClaseRedController.
?>

