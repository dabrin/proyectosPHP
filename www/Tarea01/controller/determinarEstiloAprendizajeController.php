<?php
    class determinarEstiloAprendizajeController {
        
        function __construct() {
            $this->view = new View();
        }//Fin del constructor.

        function determinarEstiloAprendizajeAction() {
            require 'model/EstiloAprendizajeModel.php';
            require 'public/domain/EstiloAprendizaje.php';

            $estiloAprendizajeModel = new EstiloAprendizajeModel();
            $estilosAprendizaje = $estiloAprendizajeModel->obtenerTodosLosEstilosAprendizaje();
            $this->view->show("determinarEstiloAprendizajeView.php", $estilosAprendizaje);
        }/* Fin de la función determinarEstiloAprendizajeAction, que obtiene todos los registros 
        de los estilos de aprendizaje almacenados en la BD y los envía a la vista. */
        
    }//Fin de la función determinarEstiloAprendizajeAction
?>

